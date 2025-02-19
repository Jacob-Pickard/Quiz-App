import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import './BlogPage.css';
import autoAnimate from '@formkit/auto-animate';

function BlogPage() {
  return (
    <Box className="blog-container">
      <Typography variant="h4" gutterBottom>
        Blog Posts
      </Typography>
      <BlogPost title="Backend Demonstration" date="February 19, 2025">
        May not demonstrate the data correctly if my backend server is not running. This is a demonstration of fetching data from a backend server and displaying it on the frontend. The data is fetched from a server that I have running on an EC2 instance. The data is fetched from the server and displayed below.
        <JsonGrabber/>
      </BlogPost>
      <BlogPost title="Auto Animate Showcase" date="February 11, 2025">
        Auto Animate is a react library that allows you to atuomatically create smooth animations in your UI, with very little effort. Below is a demonstration of a very basic form of it within my code. It is also now used whenever you click on the see less/see more buttons on the blog posts.
        <AutoAnimateShowcase/>
      </BlogPost>
      <BlogPost title="Understanding Agile Methodology" date="January 22, 2025">
        Agile methodology is a practice that promotes continuous iteration of development and testing throughout the software development lifecycle of the project. 
      </BlogPost>
      <BlogPost title="Waterfall Model Explained" date="January 21, 2025">
        The Waterfall model is a sequential design process, often used in software development processes, in which progress is seen as flowing steadily downwards. 
      </BlogPost>
      <BlogPost title="Scenario-Based Project Management" date="January 20, 2025">
        Scenario-based project management involves creating detailed scenarios to anticipate potential challenges and opportunities in a project. 
      </BlogPost>
      <Button component={Link} to="/" variant="contained" className="home-button">
        Back to Home
      </Button>
    </Box>
  );
}

function BlogPost({ title, date, children }) {
  const [expanded, setExpanded] = useState(false);
  const [parent] = useAutoAnimate({ easing: 'ease-in-out' });

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
        <Typography ref={parent} variant="body1">
          {expanded && children}
        </Typography>
        <Button onClick={toggleExpand} className="toggle-button">
          {expanded ? 'Read Less' : 'Read More'}
        </Button>
      </CardContent>
    </Card>
  );
}

function JsonGrabber() {
  const [grabbedData, setData] = React.useState([])

  React.useEffect(() => {
    fetch("http://52.20.151.181/questions")
      .then((response) => {
          return response.json();
      })
      .then((data) => {
          console.log("Fetched data:", data);
          setData(data) // Assuming the data is in data
      })
  }, [])

  return(
    <div>
      {Array.isArray(grabbedData) && grabbedData.length > 0 ? (
        grabbedData.map((item, index) => (
          <div key={index}>
            <Typography variant="h6">Question: {item.question}</Typography>
            <Typography variant="body1">Topic: {item.topics}</Typography>
            <Typography variant="body2">Options:</Typography>
            <ul>
              {item.options.map((option, idx) => (
                <li key={idx}>{option}</li>
              ))}
              Answer(s): {item.answers}     
            </ul>
          </div>
        ))
      ) : (
        <Typography variant="body1">No data available</Typography>
      )}
    </div>
  )
}

function AutoAnimateShowcase () {
  const [items, setItems] = useState([0, 1, 2])
  const [parent, enableAnimations] = useAutoAnimate({ easing: 'ease-in-out' })
  const add = () => setItems([...items, items.length])
  const remove = () => setItems(items.slice(0, -1))
  const clear = () => setItems([])

  return <>
    <ul ref={parent}>
      {items.map(
        item => <li key={item}>{ item }</li>
      )}
    </ul>
    <button onClick={add}>Add number</button>
    <button onClick={remove}>Remove last number</button>
    <button onClick={clear}>Clear</button>
  </>
}

export default BlogPage;
