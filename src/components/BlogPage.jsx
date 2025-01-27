import React, { useState } from 'react';
import { Box, Typography, Button, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import './BlogPage.css';

function BlogPage() {
  return (
    <Box className="blog-container">
      <Typography variant="h4" gutterBottom>
        Blog Posts
      </Typography>
      <BlogPost title="Understanding Agile Methodology" date="January 22, 2025">
        Agile methodology is a practice that promotes continuous iteration of development and testing throughout the software development lifecycle of the project. Agile methodology is a practice that promotes continuous iteration of development and testing throughout the software development lifecycle of the project.
      </BlogPost>
      <BlogPost title="Waterfall Model Explained" date="January 21, 2025">
        The Waterfall model is a sequential design process, often used in software development processes, in which progress is seen as flowing steadily downwards. The Waterfall model is a sequential design process, often used in software development processes, in which progress is seen as flowing steadily downwards.
      </BlogPost>
      <BlogPost title="Scenario-Based Project Management" date="January 20, 2025">
        Scenario-based project management involves creating detailed scenarios to anticipate potential challenges and opportunities in a project. Scenario-based project management involves creating detailed scenarios to anticipate potential challenges and opportunities in a project.
      </BlogPost>
      <Button component={Link} to="/" variant="contained" className="home-button">
        Back to Home
      </Button>
    </Box>
  );
}

function BlogPost({ title, date, children }) {
  const [expanded, setExpanded] = useState(false);

  // Toggle the expanded state of the blog post
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="blog-card">
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          {date}
        </Typography>
        <Typography variant="body1" className={expanded ? 'expanded' : 'collapsed'}>
          {children}
        </Typography>
        <Button onClick={toggleExpand} className="toggle-button">
          {expanded ? 'Read Less' : 'Read More'}
        </Button>
      </CardContent>
    </Card>
  );
}

export default BlogPage;
