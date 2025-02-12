import React, { useState, useEffect } from 'react';
import { Box, Typography, List, ListItem, Button, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import './Leaderboard.css';
import questions from './questions/questionsHandler';

function Leaderboard() {
  const [scores, setScores] = useState([]);

  // Load scores from localStorage when the component mounts
  useEffect(() => {
    const storedScores = JSON.parse(localStorage.getItem('leaderboard')) || [];
    setScores(storedScores);
  }, []);

  // Clear scores from localStorage and state
  const clearScores = () => {
    localStorage.removeItem('leaderboard');
    setScores([]);
  };

  const categories = ['agile', 'waterfall', 'full', 'scenario'];

  return (
    <Box className="leaderboard-container">
      <Typography variant="h4" gutterBottom>
        Leaderboard
      </Typography>
      {categories.map((category) => (
        <Paper elevation={3} className="leaderboard-category" key={category}>
          <Typography variant="h5">
            {category.toUpperCase()} Scores
          </Typography>
          <List>
            {scores
              .filter((entry) => entry.category === category)
              .sort((a, b) => b.score - a.score)
              .map((entry, index) => (
                <ListItem key={index}>
                  {index + 1}. {entry.name} - {entry.score} points
                </ListItem>
              ))}
          </List>
        </Paper>
      ))}
      <Box className="leaderboard-buttons">
        <Button component={Link} to="/" variant="contained">
          Back to Home
        </Button>
        <Button onClick={clearScores} variant="contained" color="secondary">
          Clear Scores
        </Button>
      </Box>
    </Box>
  );
}

export default Leaderboard;