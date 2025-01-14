import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, Card, CardContent } from '@mui/material';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './QuizPage.css';

const questions = {
  agile: [
    { question: 'What is the main focus of Agile project management?', options: ['Detailed project documentation', 'Responding to change over following a set plan', 'Strict adherence to predefined timelines and deliverables', 'Sequential completion of project phases'], answer: 1 },
    { question: 'What is the purpose of a Sprint Review?', options: ['To review the project costs and budget', 'To ensure the project stays on track with the initial timeline', 'To showcase the work completed during the sprint and gather feedback from stakeholders', 'To define project requirements for the upcoming sprint.'], answer: 2 },
  ],
  waterfall: [
    { question: 'Which of the following is a characteristic of the Waterfall model?', options: ['Iterative and incremental progress through the project lifecycle', 'Flexible scope and continuous delivery', 'Phases are completed in a linear and sequential manner', 'Emphasis on cross-functional team collaboration'], answer: 2 },
    { question: 'What is the first phase?', options: ['Planning', 'Initiation', 'Execution', 'Testing'], answer: 1 },
  ],
  full: [
    { question: 'What is the main focus of Agile project management?', options: ['Detailed project documentation', 'Responding to change over following a set plan', 'Strict adherence to predefined timelines and deliverables', 'Sequential completion of project phases'], answer: 1 },
    { question: 'Which of the following is a characteristic of the Waterfall model?', options: ['Iterative and incremental progress through the project lifecycle', 'Flexible scope and continuous delivery', 'Phases are completed in a linear and sequential manner', 'Emphasis on cross-functional team collaboration'], answer: 2 },
    { question: 'What is the first phase?', options: ['Planning', 'Initiation', 'Execution', 'Testing'], answer: 1 },
    { question: 'What is the purpose of a Sprint Review?', options: ['To review the project costs and budget', 'To ensure the project stays on track with the initial timeline', 'To showcase the work completed during the sprint and gather feedback from stakeholders', 'To define project requirements for the upcoming sprint.'], answer: 2 },
    { question: 'During a project, a stakeholder requests a change. What is the first step?', options: ['Approve the change', 'Analyze the impact', 'Implement immediately', 'Reject the change'], answer: 1 },
    { question: 'A team member reports a delay due to resource unavailability. What should the project manager do?', options: ['Reassign resources', 'Escalate to sponsor', 'Update the schedule', 'Conduct a team meeting'], answer: 3 },
  ],
  scenario: [
    { question: 'During a project, a stakeholder requests a change. What is the first step?', options: ['Approve the change', 'Analyze the impact', 'Implement immediately', 'Reject the change'], answer: 1 },
    { question: 'A team member reports a delay due to resource unavailability. What should the project manager do?', options: ['Reassign resources', 'Escalate to sponsor', 'Update the schedule', 'Conduct a team meeting'], answer: 3 },
  ],
};

function QuizPage() {
  const { category } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(10);
  const [completed, setCompleted] = useState(false);
  const [quizLocked, setQuizLocked] = useState(false);
  const [answerFeedback, setAnswerFeedback] = useState(''); // Feedback state
  const navigate = useNavigate();

  const questionSet = questions[category];

  useEffect(() => {
    if (!questionSet) {
      alert('Invalid quiz category');
      navigate('/');
      return;
    }
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : prev));
    }, 1000);
    return () => clearInterval(countdown);
  }, [currentQuestion, questionSet, navigate]);

  const handleAnswer = (index) => {
    if (quizLocked) return;

    const correctAnswer = questionSet[currentQuestion].answer;
    if (index === correctAnswer) {
      setScore((prev) => prev + timer);
      setAnswerFeedback('Correct!'); // Feedback for correct answer
    } else {
      setAnswerFeedback('Incorrect!'); // Feedback for incorrect answer
    }

    setTimer(10);
    if (currentQuestion < questionSet.length - 1) {
      setTimeout(() => {
        setAnswerFeedback(''); // Reset feedback after a short delay
        setCurrentQuestion((prev) => prev + 1);
      }, 1000); // Delay for feedback visibility
    } else {
      setCompleted(true);
      setQuizLocked(true);
      const userName = prompt('Enter your name for the leaderboard:');
      if (userName) {
        const scores = JSON.parse(localStorage.getItem('leaderboard')) || [];
        scores.push({ name: userName, score, category });
        localStorage.setItem('leaderboard', JSON.stringify(scores));
        navigate('/leaderboard');
      }
    }
  };

  if (!questionSet) {
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

  return (
    <Card className="quiz-card">
      <CardContent>
        <Typography variant="h5">
          Question {currentQuestion + 1}: {questionSet[currentQuestion].question}
        </Typography>
        <Box>
          {questionSet[currentQuestion].options.map((option, index) => (
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
        <Typography>Time Remaining: {timer} seconds</Typography>
        <Button component={Link} to="/" variant="outlined" sx={{ mt: 2 }}>
          Back to Home
        </Button>
      </CardContent>
    </Card>
  );
}

export default QuizPage;