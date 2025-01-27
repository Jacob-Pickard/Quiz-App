const questions = {
  agile: [
    { question: 'What is the main focus of Agile project management?', 
      options: ['Detailed project documentation', 'Responding to change over following a set plan', 'Strict adherence to predefined timelines and deliverables', 'Sequential completion of project phases'], 
      answer: 1 
    },
    { question: 'What is the purpose of a Sprint Review?', 
      options: ['To review the project costs and budget', 'To ensure the project stays on track with the initial timeline', 'To showcase the work completed during the sprint and gather feedback from stakeholders', 'To define project requirements for the upcoming sprint.'], 
      answer: 2 
    },
    { 
      question: 'What is the primary benefit of daily stand-up meetings in Agile?', 
      options: ['To track budget usage', 'To discuss long-term goals', 'To ensure team alignment and identify roadblocks quickly', 'To allocate tasks for the entire project lifecycle'], 
      answer: 2 
    },
    { 
      question: 'What is a key principle of the Agile Manifesto?', 
      options: ['Processes and tools over individuals and interactions', 'Comprehensive documentation over working software', 'Customer collaboration over contract negotiation', 'Following a plan over responding to change'], 
      answer: 2 
    },
    { 
      question: 'Which Agile framework uses time-boxed iterations called sprints?', 
      options: ['Scrum', 'Kanban', 'Lean', 'Extreme Programming (XP)'], 
      answer: 0 
    },
  ],
  waterfall: [
    { question: 'Which of the following is a characteristic of the Waterfall model?', 
      options: ['Iterative and incremental progress through the project lifecycle', 'Flexible scope and continuous delivery', 'Phases are completed in a linear and sequential manner', 'Emphasis on cross-functional team collaboration'], 
      answer: 2 
    },
    { question: 'What is the first phase?', 
      options: ['Planning', 'Initiation', 'Execution', 'Testing'], 
      answer: 1 
    },
    { 
      question: 'What is a disadvantage of the Waterfall model?', 
      options: ['Lack of clear phases', 'Difficulty in accommodating changes after the project starts', 'Continuous feedback loops', 'Unsuitable for large-scale projects'], 
      answer: 1 
    },
    { 
      question: 'In the Waterfall model, testing typically occurs:', 
      options: ['After all development phases are complete', 'At the end of each phase', 'Continuously throughout the project', 'Before project initiation'], 
      answer: 0 
    },
    { 
      question: 'What is the typical output of the planning phase in Waterfall?', 
      options: ['Final deliverable', 'A detailed project plan and schedule', 'Test cases and test plans', 'A completed prototype'], 
      answer: 1 
    },
  ],
  scenario: [
    { question: 'During a project, a stakeholder requests a change. What is the first step?', 
      options: ['Approve the change', 'Analyze the impact', 'Implement immediately', 'Reject the change'], 
      answer: 1 
    },
    { question: 'A team member reports a delay due to resource unavailability. What should the project manager do?', 
      options: ['Reassign resources', 'Escalate to sponsor', 'Update the schedule', 'Conduct a team meeting'], 
      answer: 3 
    },
    { 
      question: 'A client requests an additional feature late in the project. What is the first thing the project manager should do?', 
      options: ['Analyze the impact on scope, time, and cost', 'Implement the change immediately', 'Add it to the project without further discussion', 'Reject the request to maintain the timeline'], 
      answer: 0 
    },
    { 
      question: 'A key stakeholder has conflicting priorities. How should the project manager handle this?', 
      options: ['Ignore the conflict and proceed as planned', 'Escalate the issue to the project sponsor', 'Facilitate a discussion to align priorities', 'Remove the stakeholder from the project'], 
      answer: 2 
    },
    { 
      question: 'During a risk review meeting, the team identifies a potential delay due to supplier issues. What is the next step?', 
      options: ['Add the risk to the risk register and develop a mitigation plan', 'Escalate the risk to senior management immediately', 'Ignore the risk as it has not yet occurred', 'Communicate the risk to the customer without a plan'], 
      answer: 0 
    },
  ],
};

// Combine all questions into the 'full' category
questions.full = [
  ...questions.agile,
  ...questions.waterfall,
  ...questions.scenario,
];

export default questions;
