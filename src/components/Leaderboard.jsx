import React, { useState, useEffect } from 'react';
import { Box, Typography, List, ListItem, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Leaderboard() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const storedScores = JSON.parse(localStorage.getItem('Leaderboard')) || [];
    setScores(storedScores);
  }, []);

  const categories = ['agile', 'waterfall', 'full'];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Leaderboard
      </Typography>
      <Button component={Link} to="/" variant="outlined" sx={{ mb: 3 }}>
        Back to Home
      </Button>
      {categories.map((category) => (
        <Box key={category} sx={{ mt: 3, border: '1px solid #ccc', borderRadius: '8px', p: 2 }}>
          <Typography variant="h5" sx={{ textTransform: 'capitalize' }}>
            {category} Scores
          </Typography>
          <List>
            {scores
              .filter((entry) => entry.category === category)
              .sort((a, b) => b.score - a.score)
              .map((entry, index) => (
                <ListItem key={index} sx={{ display: 'flex', justifyContent: 'space-between', px: 2 }}>
                  <span>{index + 1}. {entry.name}</span>
                  <span>{entry.score} points</span>
                </ListItem>
              ))}
          </List>
        </Box>
      ))}
    </Box>
  );
}

export default Leaderboard;