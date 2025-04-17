import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CssBaseline, Box, Button, Typography, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import QuizPage from './components/QuizPage';
import Leaderboard from './components/Leaderboard';
import BlogPage from './components/BlogPage';
import ChartsPage from './components/ChartsPage';
import './styles/App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6200ea',
    },
    secondary: {
      main: '#03dac6',
    },
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
      <Router>
        <Box className="app-container">
          <Typography variant="h2" gutterBottom>
            <Link to="/" className="title-link">
              PMP Quiz Central
            </Link>
          </Typography>
          <Routes>
            <Route path="/" element={<Home userName={userName} handleNameChange={handleNameChange} handleNameSubmit={handleNameSubmit} nameSubmitted={nameSubmitted} />} />
            <Route path="/quiz/:category" element={<QuizPage userName={userName} />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/charts" element={<ChartsPage />} />
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
        <Button type="submit" variant="contained" color="primary" className="submit-name-button">
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
          <Button variant="contained" color="primary" component={Link} to="/quiz/agile" className="quiz-button">
            Agile Quiz
          </Button>
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <Button variant="contained" color="primary" component={Link} to="/quiz/waterfall" className="quiz-button">
            Waterfall Quiz
          </Button>
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <Button variant="contained" color="primary" component={Link} to="/quiz/scenario" className="quiz-button">
            Scenario-Based Questions
          </Button>
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <Button variant="contained" color="primary" component={Link} to="/quiz/full" className="quiz-button">
            Full Test
          </Button>
        </Grid>
      </div>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/blog"
        className="blog-button"
        style={{ marginBottom: '6px' }}
      >
        Blog
      </Button>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/leaderboard"
        className="leaderboard-button"
        style={{ marginBottom: '6px' }}
      >
        View My Scores
      </Button>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/charts"
        className="charts-button"
        style={{ marginBottom: '6px' }}
      >
        View Progress Charts
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