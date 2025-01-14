import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Box, Button, Typography, Grid } from '@mui/material';
import QuizPage from './components/QuizPage';
import Leaderboard from './components/Leaderboard';
import './App.css';

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box className="app-container">
          <Typography variant="h2" gutterBottom>
            PMBOK Quizzing Website
          </Typography>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz/:category" element={<QuizPage />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

function Home() {
  return (
    <Box className="home-container">
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
      <Button variant="outlined" component={Link} to="/leaderboard" className="leaderboard-button">
        View Leaderboard
      </Button>
    </Box>
  );
}






export default App;