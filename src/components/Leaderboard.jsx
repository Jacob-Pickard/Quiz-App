import React, { useState, useEffect } from 'react';
import { Box, Typography, List, ListItem, Button, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

function Leaderboard() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const storedScores = JSON.parse(localStorage.getItem('leaderboard')) || [];
    setScores(storedScores);
  }, []);

  const clearScores = () => {
    localStorage.removeItem('leaderboard');
    setScores([]);
  };

  const categories = ['agile', 'waterfall', 'full', 'scenario'];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Leaderboard
      </Typography>
      {categories.map((category) => (
        <Paper elevation={3} sx={{ p: 2, mb: 3 }} key={category}>
          <Typography variant="h5" sx={{ mb: 2 }}>
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
      <Button component={Link} to="/" variant="contained" sx={{ mt: 3 }}>
        Back to Home
      </Button>
      <Button onClick={clearScores} variant="contained" color="secondary" sx={{ mt: 3, ml: 2 }}>
        Clear Scores
      </Button>
    </Box>
  );
}

export default Leaderboard;