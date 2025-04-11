import React, { useEffect, useState } from 'react';
import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import '../styles/BlogPage.css';

function BlogPage() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-800">
          <BlogPost title="Module 1 Journal Entry" date="April 11, 2025"> 
            The topics that interest me for this research project are quantum computing, specifically the new Microsoft Majorana chip. I find it interesting because there hasnt been a dramatic leap in the basic components that make up a computer in a long time. At least from my perspective it seems like advancements have slowed down. I also am intrigued by all the capabilities that a possible quantum computer could have, such as solving various problems in chemistry and materials science as according to the microsoft article. This will be a good fit for the course because it is a complex topic with lots of new terms and concepts associated with quantum computing. This will allow me to demonstrate my willingness and ability to learn. I think that the most important research methodology to this project will be the literature review, as a lot of the future with quantum mechanics is theoretical, and im going to have to review a lot of material to understand all of the moving parts associated with such a complex topic. My prior experience with research is limited, but I have done some research in the past for a few projects in high school. I typically enjoy research as long as I am interested in the topic, and I am very interested in this topic, though the idea of having to find peer-reviewed articles is a bit daunting. I am looking forward to this project and learning more about quantum computing and the Majorana chip.
          </BlogPost>
          <BlogPost title="Module 1 Progress Report" date="April 10, 2025">
             My topic that I have chosen for my research project is Microsofts new quantum computing chip/technology called Majorana. I would like to delve into what makes this chip so special, and possibly determine what the future of quantum computing will be. I would like to know its uses, strengths, weaknesses, and if it could ever possibly make its way into personal computers. I've done some base-level research on the topic, just from reading a few articles about the breakthrough which come from february of 2025. I believe that this is about where I should be at this point, just selecting my topic and learning a bit more about it, such as learning the vocabulary and the basic concepts. Next week I will be delving deeper into the topic, learning more about it, and also drafting up poignant questions to be specifically researching into rather than just learning about the chip itself.

             The main issue I hit this week was scheduling my mentor appointments. I was out of town for a few days and I am a bit behind currently. My solution to this will be emailing my assigned mentor and working things out with them. Next week, I will be much more ontop of scheduling my appointment and attending all classes.
          </BlogPost>
          <div style={{ marginTop: '20px' }}>
            <Button component={Link} to="/" variant="contained" className="home-button" style={{ backgroundColor: 'var(--primary-color)', color: 'var(--text-color)' }}>
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogPost({ title, date, children }) {
  const [expanded, setExpanded] = useState(false);
  const [parent] = useAutoAnimate({ easing: 'ease-in-out' });

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="py-8 flex flex-wrap md:flex-nowrap">
      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <span className="font-semibold title-font text-white">{title}</span>
        <span className="mt-1 text-gray-500 text-sm">{date}</span>
      </div>
      <div className="md:flex-grow">
        <Typography ref={parent} variant="body1" style={{ color: 'var(--text-color)' }}>
          {expanded && children}
        </Typography>
        <Button onClick={toggleExpand} className="toggle-button" style={{ backgroundColor: 'var(--primary-color)', color: 'var(--text-color)', transition: 'transform 0.3s' }}>
          {expanded ? 'Read Less' : 'Read More'}
        </Button>
      </div>
    </div>
  );
}

function JsonGrabber() {
  const [grabbedData, setData] = React.useState([])

  React.useEffect(() => {
    fetch("http://52.20.151.181/questions")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setData(data)
      })
  }, [])

  return(
    <div>
      {Array.isArray(grabbedData) && grabbedData.length > 0 ? (
        grabbedData.map((item, index) => (
          <div key={index}>
            <Typography variant="h6" style={{ color: 'var(--text-color)' }}>Question: {item.question}</Typography>
            <Typography variant="body1" style={{ color: 'var(--text-color)' }}>Topic: {item.topics}</Typography>
            <Typography variant="body2" style={{ color: 'var(--text-color)' }}>Options:</Typography>
            <ul>
              {item.options.map((option, idx) => (
                <li key={idx} style={{ color: 'var(--text-color)' }}>{option}</li>
              ))}
              <Typography variant="body2" style={{ color: 'var(--text-color)' }}>Answer(s): {item.answers}</Typography>
            </ul>
          </div>
        ))
      ) : (
        <Typography variant="body1" style={{ color: 'var(--text-color)' }}>No data available</Typography>
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

  return (
    <>
      <ul ref={parent}>
        {items.map(item => <li key={item} style={{ color: 'var(--text-color)' }}>{ item }</li>)}
      </ul>
      <Button onClick={add} className="toggle-button" style={{ backgroundColor: 'var(--primary-color)', color: 'var(--text-color)', margin: '5px' }}>Add number</Button>
      <Button onClick={remove} className="toggle-button" style={{ backgroundColor: 'var(--primary-color)', color: 'var(--text-color)', margin: '5px' }}>Remove last number</Button>
      <Button onClick={clear} className="toggle-button" style={{ backgroundColor: 'var(--primary-color)', color: 'var(--text-color)', margin: '5px' }}>Clear</Button>
    </>
  )
}

export default BlogPage;
