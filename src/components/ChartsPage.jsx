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

  const [visibleCategories, setVisibleCategories] = useState({
    agile: false,
    waterfall: false,
    scenario: false,
    full: false
  });

  const toggleVisibility = (category) => {
    setVisibleCategories(prevState => ({
      ...prevState,
      [category]: !prevState[category]
    }));
  };

  useEffect(() => {
    const storedScores = JSON.parse(localStorage.getItem('leaderboard')) || [];

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
      <Typography variant="h4" gutterBottom style={{ color: 'var(--text-color)' }}>
        Progress Over Time
      </Typography>
      {['agile', 'waterfall', 'scenario', 'full'].map(category => (
        <div className="category-card" key={category}>
          <Paper elevation={3} className="button-paper" style={{ backgroundColor: 'var(--card-background-color)', color: 'var(--text-color)' }}>
            <Button
              variant="contained"
              onClick={() => toggleVisibility(category)}
              className="toggle-button"
              style={{ backgroundColor: 'var(--primary-color)', color: 'var(--text-color)' }}
            >
              {visibleCategories[category] ? `Hide ${category.charAt(0).toUpperCase() + category.slice(1)} Charts` : `Show ${category.charAt(0).toUpperCase() + category.slice(1)} Charts`}
            </Button>
            {visibleCategories[category] && (
              <div className="chart-row">
                <Paper elevation={3} className="chart-paper" style={{ backgroundColor: 'var(--card-background-color)', color: 'var(--text-color)' }}>
                  <Typography variant="h5" gutterBottom className="chart-title">
                    {category.charAt(0).toUpperCase() + category.slice(1)} Score Progression
                  </Typography>
                  <ProgressGraph data={graphData[category]} dataKey="score" stroke="#82ca9d" yAxisLabel="Score" />
                </Paper>
                <Paper elevation={3} className="chart-paper" style={{ backgroundColor: 'var(--card-background-color)', color: 'var(--text-color)' }}>
                  <Typography variant="h5" gutterBottom className="chart-title">
                    {category.charAt(0).toUpperCase() + category.slice(1)} Correct Answers Progression
                  </Typography>
                  <ProgressGraph data={graphData[category]} dataKey="correctAnswers" stroke="#8884d8" yAxisLabel="Correct Answers" />
                </Paper>
              </div>
            )}
          </Paper>
        </div>
      ))}
      <Button component={Link} to="/" variant="contained" sx={{ mt: 4 }} style={{ backgroundColor: 'var(--primary-color)', color: 'var(--text-color)' }}>
        Back to Home
      </Button>
    </Box>
  );
}

export default ChartsPage;
