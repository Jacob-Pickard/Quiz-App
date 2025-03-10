import React, { useState, useEffect } from 'react';
import { Box, Typography, List, ListItem, Button, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import ProgressGraph from './ProgressGraph';
import '../styles/Leaderboard.css';

function Leaderboard() {
  const [scores, setScores] = useState([]);
  const [graphData, setGraphData] = useState([]);

  // Load scores from localStorage when the component mounts
  useEffect(() => {
    const storedScores = JSON.parse(localStorage.getItem('leaderboard')) || [];
    setScores(storedScores);

    // Prepare data for the graph
    const data = storedScores.map((entry, index) => ({
      attempt: index + 1,
      correctAnswers: entry.correctAnswers,
      score: entry.score,
    }));
    setGraphData(data);
  }, []);

  // Clear scores from localStorage and state
  const clearScores = () => {
    localStorage.removeItem('leaderboard');
    setScores([]);
    setGraphData([]);
  };

  const categories = ['agile', 'waterfall', 'full', 'scenario'];

  return (
    <Box className="leaderboard-container">
      <Typography variant="h4" gutterBottom>
        My Scores
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
                  {index + 1}. {entry.name} - {entry.score} points - {entry.correctAnswers} correct answers - {new Date(entry.date).toLocaleString()}
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
        <Button component={Link} to="/charts" variant="contained">
          View Progress Charts
        </Button>
      </Box>
    </Box>
  );
}

export default Leaderboard;