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
          <BlogPost title="Module 9 Journal Entry" date="June 5, 2025">
            Research provides decision-makers with evidence based insights, reducing uncertainty and minimizing risks. It enables them to identify trends, evaluate alternatives, and anticipate potential outcomes, leading to more effective and justifiable decisions. Unlike seat-of-the-pants decision making, which relies on intuition or guesswork, research supports rational, informed choices that are more likely to achieve desired objectives.
          </BlogPost>
          <BlogPost title="Module 9 Progress Report" date="June 5, 2025">
            I've made excellent progress in my research journey this week! I have finally completed my research paper, and tomorrow (Friday the 6th) I plan to begin working on my presentation, and then my publication. I think I did more than I had expected this week, I had expected my paper to bleed over into next week, but I have completed it thursday of this week which is excellent progress. My main issue I ran into was time once again. I kept finding myself needing more time to complete what I wanted to, leading me to spend more time doing homework than normal, but it has helped to get me on schedule.
          </BlogPost>
          <BlogPost title="Module 8 Journal Entry" date="May 30, 2025">
             By bringing together sources ranging from Microsoft’s own articles to critical blog posts and academic papers, I’ve discovered that the concept of “topological protection” is a recurring theme. This idea, which is supposed to make quantum bits more stable and less error-prone, is cited as the chip’s main advantage. However, the technical details and real-world demonstrations of this advantage are still sparse. This has led me to appreciate the importance of looking beyond press releases and seeking out a variety of perspectives. Including those that question the mainstream narrative. It’s a reminder that true understanding often comes from synthesizing information across many sources, not just accepting the loudest or most optimistic voices.
          </BlogPost>
          <BlogPost title="Module 8 Progress Report" date="May 30, 2025">
            As far as my research journey goes, I am on track to complete the project on time. I have been able to finish my detailed outline, and a significant portion of my paper (introduction and quantum mechanics basics). The only issue I have run into this week is that I have not had enough time to work on the project as I would like due to personal obligations. My solution is to dedicate more time to the project, and actually sticking to that. I will be doing that this next week. Next week I plan to begin work on my presentation, and hopefully finishing up my paper as well. I am excited to present my research and share what I have learned.
          </BlogPost>
          <BlogPost title="Module 7 Journal Entry" date="May 21, 2025">
            Before I began my research on Microsoft’s Majorana-based quantum chip, I had assumed that any major announcement from a company like Microsoft would be backed by extensive peer-reviewed evidence. However, critical articles such as the one from postquantum.com highlighted the lack of direct, peer-reviewed proof for the Majorana chip’s capabilities, which made me more cautious about accepting corporate claims at face value.

            Overall, my research journey has shown me the importance of questioning assumptions and seeking corroborating evidence from multiple sources. I have learned to be more critical of the information I consume, especially when it comes to groundbreaking claims in technology. This experience has also reinforced my belief in the value of peer-reviewed research as a cornerstone of scientific progress. I will carry this lesson forward in my future research endeavors, ensuring that I remain vigilant and discerning in my evaluation of sources.
          </BlogPost>
          <BlogPost title="Module 7 Progress Report" date="May 21, 2025">
            As far as my research journey goes, I am slightly behind schedule. I should at this point be outlining and drafting, and I have only begun outlining. My current outline is quite thorough though, I should be able to prepare a decent draft in a short amount of time. I have not yet started drafting, but I have a good understanding of the material. The only issue I have run into this week is relating to my available time to work on the project. I have been busy with other obligations, and I have not had as much time to work on the project as I would like. My solution is to simply dedicate more time to the project, and I will be doing that this next week. Next week I plan to start drafting my paper. I will be using the sources that I have already read and evaluated to help me with this process. I am excited to start writing my paper and putting all of my research together.
          </BlogPost>
          <BlogPost title="Module 6 Journal Entry" date="May 15, 2025"> 
            <Button
              variant="outlined"
              style={{ color: 'var(--text-color)', borderColor: 'var(--primary-color)', marginBottom: '10px' }}
              href="assets/Majorana_Chip_Research_Memo.docx"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Download Module 6 Journal Entry (DOCX)
            </Button>
          </BlogPost>
          <BlogPost title="Module 6 Progress Report" date="May 15, 2025"> 
            As far as my research journey goes, I am slightly behind schedule. I should at this point be outlining and drafting, and I have not begun that yet. Though for this week, I did manage to fully review and evaluate all of my sources, and I have a good understanding of the material. I also was able to remove a few sources which were not relevant to my topic, or were far too technical for me to understand. The only issue I haev run into this week is still the repeat issue of some articles being behind a paywall. My solutiion is still to simply not use these sources, and just stick to what I have. Next week I plan to start outlining my paper and drafting it. I will be using the sources that I have already read and evaluated to help me with this process. I am excited to start writing my paper and putting all of my research together.
          </BlogPost>
          <BlogPost title="Module 5 Journal Entry" date="May 8, 2025">
            One new thing that I have learned this week is about the difference between physical and logical qubits. Physical qubits are the actual physical components that make up a quantum computer, while logical qubits are the abstract representations of qubits that are used in quantum algorithms. This distinction is important because it helps to understand how quantum computers work and how they can be used to solve complex problems. I have also learned about the importance of error correction in quantum computing, as physical qubits are prone to errors due to their sensitivity to environmental factors. This has helped me to better understand the challenges that researchers face in developing practical quantum computers.
          </BlogPost>
          <BlogPost title="Module 5 Progress Report" date="May 8, 2025">
            I have fallen a bit behind on my research journey unfortunately. Fully reading and evaluating my sources has taken longer than I expected, and I have been busy with other obligations. I have been able to find a few more sources, but I am still working on reading them and evaluating them. As far as my plan to remedy this, I will be dedicating more time to reading/re-reading my sources and evaluating them. I had already read over a lot of my sources in the initial stages of my research, but I will be going back and re-reading them to ensure that I have a full understanding of the material. As far as what I have done this week, I have been working on reading through my sources, some of them are very lengthy and technical, which has slowed me down significantly. Next week I plan to finish reading through my sources and start laying out my outline.
          </BlogPost>
          <BlogPost title="Week 5 Lab Activity" date="May 6, 2025" images={["assets/majorana_chip.jpg", "assets/quantumvsclassical.png"]}>
            Citations for my images: 
            <br/>
            heute.at. (n.d.). Xiaomi und European Schoolnet starten Tech-Initiative [Photograph]. heute.at. https://www.heute.at/i/xiaomi-und-european-schoolnet-starten-tech-initiative-120091357/doc-1ij62rdkp0
            <br/>
            Devopedia. (2021, February 11). AI in education: Applications [Image]. Devopedia. https://devopedia.org/images/article/68/1311.1613047017.png
            <br/><br/>
            The first image from heute.at shows the Majorana chip, which I may use within my paper just to show an example of what the chip looks like (this is the creative commons image). The second image from Devopedia is a comparison of quantum and classical computing, which I will be using to show the differences between the two types of computing. I will be using these images to help illustrate my points and provide visual context for my research.
          </BlogPost>
          <BlogPost title="Module 4 Journal Entry" date="May 1, 2025">
            Reflecting on the ethical questions that arose during my information gathering process, one significant issue stands out: the lack of peer-reviewed evidence supporting Microsoft's Majorana quantum computing chip. While the official announcement article references a Nature paper, this paper only describes a potential component of the chip rather than the chip itself. Furthermore, the paper was created 1 and a half years ago and only recently published, raising questions about the transparency and timing of Microsoft's claims. This lack of verifiable evidence makes it challenging to assess the chip's functionality or even its existence, highlighting the ethical responsibility of companies to provide clear and substantiated information when making groundbreaking announcements.
          </BlogPost>
          <BlogPost title="Module 4 Progress Report" date="May 1, 2025">
            My research journey seems to be on track. I have been able to find a lot of sources that are relevant to my topic, and I have been able to read and understand them. I have also been able to write a short blurb about each source in my document of sources. The issues that I have run into this week involve some articles being behind a paywall, and I have not been able to access them. My solution to this issue has been to simply find other resources, though I have considered purchasing the article as it was inexpensive. To make progress I found a few new sources using the tips and resources that the librarian provided me with (Google Scholar, related article links). Next week I will be focusing on more thoroughly reading the articles I have found, and starting to eliminate some sources possibly.
          </BlogPost>
          <BlogPost title="Week 4 Lab Activity" date="April 30, 2025" images={["assets/mind_map.png"]}>
            As I continue researching my question — What sets Microsoft’s Majorana-based quantum chip apart from other quantum computing architectures? — I’ve collected a variety of sources offering insights from Microsoft itself, academic papers, and critical industry perspectives. Here are the five most useful sources in my current research:
            https://news.microsoft.com/source/features/innovation/microsofts-majorana-1-chip-carves-new-path-for-quantum-computing/
            Microsoft’s feature article gives an official overview of the Majorana 1 chip’s goals, unique properties, and the company's roadmap.

            https://medium.com/%40adnanmasood/shadows-that-compute-the-rise-of-microsofts-majorana-1-in-next-generation-quantum-technologies-903a908bb071
            Adnan Masood, PhD, breaks down the foundational principles of topological qubits and the Majorana fermion concept, making this technical topic much easier to digest.

            https://postquantum.com/industry-news/microsofts-majorana-1-hype/
            This critical article explores the skepticism around Microsoft’s announcement, highlighting the absence of peer-reviewed proof and raising important questions about transparency.

            https://www.researchgate.net/profile/Douglas-Youvan/publication/389169814_Microsoft's_Majorana_1_A_Paradigm_Shift_Toward_Scalable_and_Fault-Tolerant_Quantum_Computing/links/67b757c2207c0c20fa8f5d36/Microsofts-Majorana-1-A-Paradigm-Shift-Toward-Scalable-and-Fault-Tolerant-Quantum-Computing.pdf
            This expansive ResearchGate paper helped me understand the architectural differences between traditional and topological quantum chips, providing a lot of useful language and definitions.

            https://news.ucsb.edu/2025/021760/topological-quantum-processor-marks-breakthrough-computing
            UC Santa Barbara’s article places the research in a broader academic context, showing how Microsoft’s progress was supported by foundational university-led studies.

            Creating the mind map helped me uncover several key correlations and unexpected insights. First, I noticed how "topological protection" appeared repeatedly across all technical and non-technical sources, even critics acknowledge its potential to minimize quantum error correction. This concept emerged as the central node linking Majorana zero modes, stability, and scalability. Another surprise was just how fragmented the coverage of this chip is. Microsoft’s own publications focus on vision and goals, while third-party sources dig into what's missing, such as peer-reviewed confirmation or open benchmarks.
          </BlogPost>
          <BlogPost title="Module 3 Journal Entry" date="April 25, 2025" >
            Something that made it challenging to select my research topic was that I had to consider what I was interested in the most and what I wanted to learn more about. I am interested in many areas of technology, but I had seen this specific article from microsoft about their new quantum chip called Majorana, and I was incredibly intrigued by it. This article had come out in February and it had stuck with me as something I wanted to learn more about. I was a bit daunted by the idea of having to gain a full understanding of quantum computing, but I was excited to learn more about it.
          </BlogPost>
          <BlogPost title="Module 3 Progress Report" date="April 24, 2025">
            My research plan is to continue my literature review (and the rest of my research project) consistent with the timeline provided in the week three lab's description as I feel I can stay within that alloted time comfortably. I will additionally focus on gathering more relevant sources which are scholarly articles. I believe as far as my research journey goes, I am currently on track to complete the project on time, if not I am a bit ahead currently. I have been able to find a lot of sources that are relevant to my topic, and I have been able to read and understand them. I have also been able to write a short blurb about each source in my document of sources. I have not run into any major issues that are different from last weeks where I found some to be too technical. The plan to overcome this issue is largely the same, I read the articles and then look up any terms that I do not understand. This week, I have been able to find even more sources that are relevant to my topic through the use of google scholar (thanks to the chat with a librarian feature, I was recommended this), though my newer sources are more reliable. Next week I expect to delve even more into the research, possibly purchasing an article on the topic as it is cited in 800 various sources, and I would like to see what it has to say.
          </BlogPost>
          <BlogPost title="Week 3 Lab Activity" date="April 23, 2025">
            For my research project on Microsoft's Majorana-based quantum computing chip, I reached out to a librarian for help reviewing my sources and identifying any important resources I might be missing. The librarian, Tina Chrzastowski, clarified that while she couldn't assess the completeness of my research, she could assist with finding additional materials. She asked what databases I had used, and I admitted I had mostly relied on general search engines. Tina introduced me to Google Scholar, providing a search link and pointing out two highly relevant articles, one of which I already had and others that were new to me. She gave me several valuable tips: using "Related Articles" links, searching with "site:edu" or "site:gov" to find free full texts, and adjusting results by publication year. She emphasized that Google Scholar indexes peer-reviewed materials deeply and is a powerful, free tool for academic research. This interaction introduced me to a new, reliable research method that will significantly strengthen my project. I’m very grateful for her guidance and plan to incorporate Google Scholar heavily moving forward.
          </BlogPost>
          <BlogPost title="Module 2 Journal Entry" date="April 17, 2025">
            Three things that I know about my topic without looking them up: 1. Majorana uses a different quantum computing architecture than traditional quantum chips. This is because the chip uses what is called a "Topological architecture", whereas regular quantum chips use a "Superconducting architecture". 2. A topological architecture differs from a superconducting architecture in that instead of using particles that have a delicate state (such as ions or photons), it uses Majorana particles, which are often more stable and easier to measure and digitally control. 3. Majorana particles are more stable and less likely to be disturbed by their environment due to how the topological superconductor is constructed. The way I imagine the superconductor after doing some reading, is that it's similar in function to a shielded cable that might be used in networking, it keeps disturbances out of the quantum solution better than a regular superconducting architecture. This means that there is less errors and corrections that will occur within a quantum solution, which is a requirement for scaling of a future quantum chip.
          </BlogPost>
          <BlogPost title="Module 2 Progress Report" date="April 17, 2025">
            The question I have developed for my research is: "What sets Microsoft’s Majorana-based quantum chip apart from other quantum computing architectures?" I believe that my research will primarily involve literature review, as I need to understand the fundamental concepts of quantum computing. This will include studying the unique properties of the Majorana-based chip and comparing it to other architectures. I believe that I am slightly ahead in my research journey currently. I have identified 11 sources as of today, all of them from various sources. Additionally, I have reviewed and read all of these sources and written a short blurb within my document of sources about what I took away from the article. As far as issues that I have hit, I have not run into any major issues, but I have had some trouble finding sources that are not too technical. I have been able to work around this by reading the articles and then looking up any terms that I do not understand. This week to progress I did my preliminary search for sources and documented them, as well as refining my question. This was a bit more than I had expected for the week as I figured I would mainly be gathering sources and reviewing them later, but I was hooked on learning more. I am excited to continue my research and see where it takes me. Next week, I will be doing more advanced searches for information and sources, I will accomplish this by visiting the library as required, and possbily reaching out Professor B. for more help.
          </BlogPost>
          <BlogPost title="Week 2 Lab Activity" date="April 16, 2025">
            To track my sources, I will simply be using a word document which will contain the link and a short description of each source. I will typically be using this document to jot down any thoughts I have about the source, such as what I learned from it, or if it is relevant to my research question. My resource from Medium.com by Adnand Masood, PHD, is my favorite source so far as it helps to define many of the core concepts of quantum computing in general (such as topological qubits which I had some confusion about before), and also provides a good overview of what makes the Majorana Chip different from other quantum computing architectures.
          </BlogPost>
          <BlogPost title="Module 1 Journal Entry" date="April 11, 2025">
            The topics that interest me for this research project are quantum computing, specifically the new Microsoft Majorana chip. I find it interesting because there hasnt been a dramatic leap in the basic components that make up a computer in a long time. At least from my perspective it seems like advancements have slowed down. I also am intrigued by all the capabilities that a possible quantum computer could have, such as solving various problems in chemistry and materials science as according to the microsoft article. This will be a good fit for the course because it is a complex topic with lots of new terms and concepts associated with quantum computing. This will allow me to demonstrate my willingness and ability to learn. I think that the most important research methodology to this project will be the literature review, as a lot of the future with quantum mechanics is theoretical, and im going to have to review a lot of material to understand all of the moving parts associated with such a complex topic. My prior experience with research is limited, but I have done some research in the past for a few projects in high school. I typically enjoy research as long as I am interested in the topic, and I am very interested in this topic, though the idea of having to find peer-reviewed articles is a bit daunting. I am looking forward to this project and learning more about quantum computing and the Majorana chip.
          </BlogPost>
          <BlogPost title="Module 1 Progress Report" date="April 10, 2025">
            My topic that I have chosen for my research project is Microsofts new quantum computing chip/technology called Majorana. I would like to delve into what makes this chip so special, and possibly determine what the future of quantum computing will be. I would like to know its uses, strengths, weaknesses, and if it could ever possibly make its way into personal computers. I've done some base-level research on the topic, just from reading a few articles about the breakthrough which come from february of 2025. I believe that this is about where I should be at this point, just selecting my topic and learning a bit more about it, such as learning the vocabulary and the basic concepts. Next week I will be delving deeper into the topic, learning more about it, and also drafting up poignant questions to be specifically researching into rather than just learning about the chip itself.

            The main issue I hit this week was scheduling my mentor appointments. I was out of town for a few days and I am a bit behind currently. My solution to this will be emailing my assigned mentor and working things out with them. Next week, I will be much more ontop of scheduling my appointment and attending all classes.
          </BlogPost>
          <BlogPost title="Week one Lab Activity" date="April 9, 2025">
            Hello! My name is Jacob Pickard and I will be using this blog to document my research journey for the next few weeks. I am a BASIS student at Olympic College and I am currently enrolled in the Reading and Research Course. For my research project, I have chosen to focus on Microsoft’s new quantum computing chip, Majorana. I am excited to learn more about this topic and share my findings. I will be posting weekly updates on my progress, challenges, and discoveries. I hope you find my research journey interesting and informative.
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

function BlogPost({ title, date, children, images = [] }) {
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
          {expanded && (
            <>
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${title} - Image ${index + 1}`}
                  style={{ maxWidth: '100%', marginBottom: '10px', borderRadius: '8px' }}
                />
              ))}
              {children}
            </>
          )}
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

  return (
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

function AutoAnimateShowcase() {
  const [items, setItems] = useState([0, 1, 2])
  const [parent, enableAnimations] = useAutoAnimate({ easing: 'ease-in-out' })
  const add = () => setItems([...items, items.length])
  const remove = () => setItems(items.slice(0, -1))
  const clear = () => setItems([])

  return (
    <>
      <ul ref={parent}>
        {items.map(item => <li key={item} style={{ color: 'var(--text-color)' }}>{item}</li>)}
      </ul>
      <Button onClick={add} className="toggle-button" style={{ backgroundColor: 'var(--primary-color)', color: 'var(--text-color)', margin: '5px' }}>Add number</Button>
      <Button onClick={remove} className="toggle-button" style={{ backgroundColor: 'var(--primary-color)', color: 'var(--text-color)', margin: '5px' }}>Remove last number</Button>
      <Button onClick={clear} className="toggle-button" style={{ backgroundColor: 'var(--primary-color)', color: 'var(--text-color)', margin: '5px' }}>Clear</Button>
    </>
  )
}

export default BlogPage;
