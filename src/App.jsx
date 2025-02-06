import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Box, Button, Typography, Grid } from '@mui/material';
import QuizPage from './components/QuizPage';
import Leaderboard from './components/Leaderboard';
import BlogPage from './components/BlogPage';
import './App.css';

// Create a theme with primary and secondary colors
const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
  },
});

function App() {
  const [userName, setUserName] = useState('');
  const [nameSubmitted, setNameSubmitted] = useState(false);

  // Handle name input change
  const handleNameChange = (e) => {
    setUserName(e.target.value);
    setNameSubmitted(false);
  };

  // Handle name form submission
  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (userName.trim()) {
      setNameSubmitted(true);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename="/Quiz-App">
        <Box className="app-container">
          <Typography variant="h2" gutterBottom>
            PMBOK Quizzing Website
          </Typography>
          <Routes>
            <Route path="/" element={<Home userName={userName} handleNameChange={handleNameChange} handleNameSubmit={handleNameSubmit} nameSubmitted={nameSubmitted} />} />
            <Route path="/quiz/:category" element={<QuizPage userName={userName} />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

// Home component for the main page
function Home({ userName, handleNameChange, handleNameSubmit, nameSubmitted }) {
  return (
    <Box className="home-container">
      <form onSubmit={handleNameSubmit} className="name-form">
        <input
          type="text"
          placeholder="Enter your name"
          value={userName}
          onChange={handleNameChange}
          className="name-input"
        />
        <Button type="submit" variant="contained" className="submit-name-button">
          Submit Name
        </Button>
        {nameSubmitted && (
          <Typography variant="body1" className="name-confirmation">
            Name submitted successfully!
          </Typography>
        )}
      </form>
      <div className="home-button-grid">
        <Grid item xs={6} sm={6} md={6}>
          <Button variant="contained" component={Link} to="/quiz/agile" className="MuiButton-root">
            Agile Quiz
          </Button>
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <Button variant="contained" component={Link} to="/quiz/waterfall" className="MuiButton-root">
            Waterfall Quiz
          </Button>
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <Button variant="contained" component={Link} to="/quiz/scenario" className="MuiButton-root">
            Scenario-Based Questions
          </Button>
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <Button variant="contained" component={Link} to="/quiz/full" className="MuiButton-root">
            Full Test
          </Button>
        </Grid>
      </div>
      <Button variant="contained" component={Link} to="/blog" className="blog-button">
        Blog
      </Button>
      <Button variant="outlined" component={Link} to="/leaderboard" className="leaderboard-button">
        View Leaderboard
      </Button>
      <Box className="scoring-info">
        <Typography variant="h6">How the Scoring System Works</Typography>
        <Typography variant="body1">
          You earn 1 point for each second remaining when you select the correct answer. The timer only has to do with scoring, the quiz will not move onto the next question before you answer.
        </Typography>
      </Box>
    </Box>
  );
}

export default App;