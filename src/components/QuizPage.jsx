import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, Card, CardContent } from '@mui/material';
import { useParams, Link, useNavigate } from 'react-router-dom';
import questions from './questions.jsx';
import './QuizPage.css';

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
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
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
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : prev));
    }, 1000);
    return () => clearInterval(countdown);
  }, [currentQuestion]);

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

    const correctAnswer = shuffledQuestions[currentQuestion].answer;
    if (index === correctAnswer) {
      const points = timer;
      setScore((prev) => prev + points);
      setPointsGained(points);
      setShowPoints(true);
      setAnswerFeedback('Correct!');
    } else {
      setAnswerFeedback('Incorrect!');
    }

    setQuizLocked(true);

    setTimeout(() => {
      setQuizLocked(false);
      setAnswerFeedback('');
      setShowPoints(false);
      if (currentQuestion < shuffledQuestions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
        setTimer(30);
      } else {
        setCompleted(true);
      }
    }, 2000);
  };

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
    <Card className="quiz-card">
      <CardContent>
        <Typography variant="h5">
          Question {currentQuestion + 1}: {shuffledQuestions[currentQuestion].question}
        </Typography>
        <Box>
          {shuffledQuestions[currentQuestion].options.map((option, index) => (
            <Button
              key={index}
              variant="contained"
              onClick={() => handleAnswer(index)}
              sx={{ m: 1 }}
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
        <Typography>Time Remaining: {timer} seconds</Typography>
        <Button component={Link} to="/" variant="outlined" sx={{ mt: 2 }}>
          Back to Home
        </Button>
      </CardContent>
    </Card>
  );
}

export default QuizPage;