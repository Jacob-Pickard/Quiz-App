import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, Box, Button, Typography } from '@mui/material';
import QuizPage from './components/QuizPage';
import Leaderboard from './components/Leaderboard.jsx';
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
            PMP Quizzing
          </Typography>
          <Typography variant='h4' gutterBottom>
            by Jacob Pickard
          </Typography>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz/:category" element={<QuizPage />} />
            <Route path="/Leaderboard" element={<Leaderboard />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

function Home() {
  return (
    <Box className="home-container">
      <Button variant="contained" component={Link} to="/quiz/agile" sx={{ m: 2 }}>
        Agile Quiz
      </Button>
      <Button variant="contained" component={Link} to="/quiz/waterfall" sx={{ m: 2 }}>
        Waterfall Quiz
      </Button>
      <Button variant="contained" component={Link} to="/quiz/full" sx={{ m: 2 }}>
        Full Test
      </Button>
      <Button variant="outlined" component={Link} to="/Leaderboard" sx={{ m: 2 }}>
        View Leaderboard
      </Button>
    </Box>
  );
}

export default App;