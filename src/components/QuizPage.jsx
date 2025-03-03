import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, Card, CardContent, LinearProgress } from '@mui/material';
import { useParams, Link, useNavigate } from 'react-router-dom';
import questions from './questions/questionsHandler.jsx';
import '../styles/QuizPage.css';

// Function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function QuizPage({ userName }) {
  const { category } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30);
  const [completed, setCompleted] = useState(false);
  const [quizLocked, setQuizLocked] = useState(false);
  const [answerFeedback, setAnswerFeedback] = useState('');
  const [pointsGained, setPointsGained] = useState(0);
  const [showPoints, setShowPoints] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const navigate = useNavigate();

  // Shuffle questions when the component mounts
  useEffect(() => {
    if (!questions[category]) {
      alert('Invalid quiz category');
      navigate('/');
      return;
    }
    setShuffledQuestions(shuffleArray([...questions[category]]));
  }, [category, navigate]);

  // Start the countdown timer
  useEffect(() => {
    let countdown;
    if (!quizLocked) {
      countdown = setInterval(() => {
        setTimer((prev) => (prev > 0 ? prev - 1 : prev));
      }, 1000);
    }
    return () => clearInterval(countdown);
  }, [currentQuestion, quizLocked]);

  // Save the score to the leaderboard when the quiz is completed
  useEffect(() => {
    if (completed) {
      const finalUserName = userName || prompt('Enter your name for the leaderboard:');
      if (finalUserName) {
        const newScore = { name: finalUserName, score, category };
        const storedScores = JSON.parse(localStorage.getItem('leaderboard')) || [];
        storedScores.push(newScore);
        localStorage.setItem('leaderboard', JSON.stringify(storedScores));
      }
    }
  }, [completed, score, category, userName]);

  // Handle answer selection
  const handleAnswer = (index) => {
    if (quizLocked) return;

    const correctAnswers = shuffledQuestions[currentQuestion].answers;
    if (correctAnswers.includes(index)) {
      const points = timer;
      setScore((prev) => prev + points);
      setPointsGained(points);
      setShowPoints(true);
      setAnswerFeedback('Correct!');
    } else {
      setAnswerFeedback('Incorrect!');
    }

    setQuizLocked(true);
    setShowExplanation(true);
  };

  // Handle next question
  const handleNextQuestion = () => {
    setQuizLocked(false);
    setAnswerFeedback('');
    setShowPoints(false);
    setShowExplanation(false);
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setTimer(30);
    } else {
      setCompleted(true);
    }
  };

  // Calculate progress percentage
  const progress = ((currentQuestion + 1) / shuffledQuestions.length) * 100;

  // Render the quiz start prompt
  if (!quizStarted) {
    return (
      <Box className="quiz-container">
        <Card className="info-card">
          <CardContent>
            <Typography variant="h4">Ready to Start the Quiz?</Typography>
            <Typography variant="h6">
              Category: {category}
            </Typography>
            <Typography variant="h6">
              Number of Questions: {questions[category]?.length || 0}
            </Typography>
            <Button
              variant="contained"
              onClick={() => setQuizStarted(true)}
              sx={{ mt: 2 }}
            >
              Start Quiz
            </Button>
          </CardContent>
        </Card>
        <Button component={Link} to="/" variant="outlined" sx={{ mt: 2 }}>
          Back to Home
        </Button>
      </Box>
    );
  }

  // Render the quiz page
  if (!shuffledQuestions.length) {
    return (
      <Box>
        <Typography variant="h4" color="error">
          Invalid quiz category.
        </Typography>
        <Button component={Link} to="/" variant="contained" sx={{ mt: 2 }}>
          Back to Home
        </Button>
      </Box>
    );
  }

  // Render the quiz completion page
  if (completed) {
    return (
      <Box>
        <Typography variant="h4">Quiz Completed!</Typography>
        <Typography>Your Score: {score}</Typography>
        <Button component={Link} to="/leaderboard" variant="contained" sx={{ mt: 2 }}>
          View Leaderboard
        </Button>
        <Button component={Link} to="/" variant="outlined" sx={{ mt: 2 }}>
          Back to Home
        </Button>
      </Box>
    );
  }

  // Render the current question
  return (
    <Box className="quiz-container">
      <Card className="info-card">
        <CardContent>
          <Typography variant="h4" className="current-score">
            Current Score: {score}
          </Typography>
          <Typography variant="h5" className="quiz-timer">
            Time Remaining: {timer} seconds
          </Typography>
          <LinearProgress variant="determinate" value={progress} sx={{ mt: 2 }} />
        </CardContent>
      </Card>
      <Card className="quiz-card">
        <CardContent>
          <Typography variant="h5">
            Question {currentQuestion + 1} of {shuffledQuestions.length}: {shuffledQuestions[currentQuestion].question}
          </Typography>
          <Box>
            {shuffledQuestions[currentQuestion].options.map((option, index) => (
              <Button
                key={index}
                variant="contained"
                onClick={() => handleAnswer(index)}
                sx={{ m: 1 }}
                disabled={quizLocked}
              >
                {option}
              </Button>
            ))}
          </Box>
          {answerFeedback && (
            <Typography
              variant="h6"
              sx={{
                color: answerFeedback === 'Correct!' ? 'green' : 'red',
                mt: 2,
                fontWeight: 'bold',
              }}
            >
              {answerFeedback}
            </Typography>
          )}
          {showPoints && (
            <Typography
              variant="h4"
              className="points-gained"
            >
              +{pointsGained} points!
            </Typography>
          )}
          {showExplanation && (
            <Typography
              variant="body1"
              sx={{
                mt: 2,
                fontStyle: 'italic',
              }}
            >
              Explanation: {shuffledQuestions[currentQuestion].explanation}
            </Typography>
          )}
          {quizLocked && (
            <Button
              variant="contained"
              onClick={handleNextQuestion}
              sx={{ mt: 2 }}
            >
              Next Question
            </Button>
          )}
        </CardContent>
      </Card>
      <Button component={Link} to="/" variant="outlined" sx={{ mt: 2 }}>
        Back to Home
      </Button>
    </Box>
  );
}

export default QuizPage;