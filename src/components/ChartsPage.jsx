import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ProgressGraph from './ProgressGraph';
import '../styles/ChartsPage.css';

function ChartsPage() {
  const [graphData, setGraphData] = useState({
    agile: [],
    waterfall: [],
    scenario: [],
    full: []
  });

  // Load scores from localStorage when the component mounts
  useEffect(() => {
    const storedScores = JSON.parse(localStorage.getItem('leaderboard')) || [];

    // Prepare data for the graph
    const categories = ['agile', 'waterfall', 'scenario', 'full'];
    const data = categories.reduce((acc, category) => {
      acc[category] = storedScores
        .filter(entry => entry.category === category)
        .map((entry, index) => ({
          attempt: index + 1,
          correctAnswers: entry.correctAnswers,
          score: entry.score,
        }));
      return acc;
    }, {});

    setGraphData(data);
  }, []);

  return (
    <Box className="charts-container">
      <Typography variant="h4" gutterBottom>
        Progress Over Time
      </Typography>
      {['agile', 'waterfall', 'scenario', 'full'].map(category => (
        <div className="chart-row" key={category}>
          <Paper elevation={3} className="chart-paper">
            <Typography variant="h5" gutterBottom>
              {category.charAt(0).toUpperCase() + category.slice(1)} Score Progression
            </Typography>
            <ProgressGraph data={graphData[category]} dataKey="score" stroke="#82ca9d" yAxisLabel="Score" />
          </Paper>
          <Paper elevation={3} className="chart-paper">
            <Typography variant="h5" gutterBottom>
              {category.charAt(0).toUpperCase() + category.slice(1)} Correct Answers Progression
            </Typography>
            <ProgressGraph data={graphData[category]} dataKey="correctAnswers" stroke="#8884d8" yAxisLabel="Correct Answers" />
          </Paper>
        </div>
      ))}
      <Button component={Link} to="/" variant="contained" sx={{ mt: 4 }}>
        Back to Home
      </Button>
    </Box>
  );
}

export default ChartsPage;
