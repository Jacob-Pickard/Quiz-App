const waterfallQuestions = [
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
  { 
    question: 'What is the main focus during the execution phase in Waterfall?', 
    options: ['Defining project scope', 'Completing project deliverables', 'Testing the product', 'Closing the project'], 
    answer: 1 
  },
  { 
    question: 'Which document outlines the project’s objectives, scope, and deliverables?', 
    options: ['Project Charter', 'Risk Register', 'Project Schedule', 'Stakeholder Register'], 
    answer: 0 
  },
  { 
    question: 'What is the primary purpose of the testing phase in Waterfall?', 
    options: ['To gather requirements', 'To develop the product', 'To verify that the product meets requirements', 'To plan the project'], 
    answer: 2 
  },
  { 
    question: 'Which phase involves obtaining formal acceptance of the project deliverables?', 
    options: ['Initiation', 'Planning', 'Execution', 'Closing'], 
    answer: 3 
  },
  { 
    question: 'What is a common tool used for tracking project progress in Waterfall?', 
    options: ['Kanban Board', 'Gantt Chart', 'Burndown Chart', 'Product Backlog'], 
    answer: 1 
  },
  { 
    question: 'What is the main focus of the initiation phase in Waterfall?', 
    options: ['Defining project scope', 'Developing the project plan', 'Executing project tasks', 'Testing the product'], 
    answer: 0 
  },
  { 
    question: 'Which document is created during the planning phase to outline project risks?', 
    options: ['Risk Register', 'Project Charter', 'Stakeholder Register', 'Project Schedule'], 
    answer: 0 
  },
  { 
    question: 'What is a key characteristic of the Waterfall model?', 
    options: ['Iterative development', 'Flexible scope', 'Sequential phases', 'Continuous delivery'], 
    answer: 2 
  },
  { 
    question: 'Which phase involves monitoring and controlling project performance?', 
    options: ['Initiation', 'Planning', 'Execution', 'Monitoring and Controlling'], 
    answer: 3 
  },
  { 
    question: 'What is the primary purpose of the closing phase in Waterfall?', 
    options: ['To complete project deliverables', 'To obtain formal acceptance of the project', 'To develop the project plan', 'To test the product'], 
    answer: 1 
  },
  { 
    question: 'What is the main focus of the planning phase in Waterfall?', 
    options: ['Defining project scope', 'Developing the project plan', 'Executing project tasks', 'Testing the product'], 
    answer: 1 
  },
  { 
    question: 'Which document is used to track project issues in Waterfall?', 
    options: ['Issue Log', 'Risk Register', 'Project Charter', 'Stakeholder Register'], 
    answer: 0 
  },
  { 
    question: 'What is a key disadvantage of the Waterfall model?', 
    options: ['Lack of clear phases', 'Difficulty in accommodating changes', 'Continuous feedback loops', 'Unsuitable for small projects'], 
    answer: 1 
  },
  { 
    question: 'Which phase involves the creation of detailed project requirements?', 
    options: ['Initiation', 'Planning', 'Execution', 'Testing'], 
    answer: 1 
  },
  { 
    question: 'What is the primary purpose of the execution phase in Waterfall?', 
    options: ['To complete project deliverables', 'To develop the project plan', 'To test the product', 'To close the project'], 
    answer: 0 
  },
  { 
    question: 'What is the main focus of the initiation phase in Waterfall?', 
    options: ['Defining project scope', 'Developing the project plan', 'Executing project tasks', 'Testing the product'], 
    answer: 0 
  },
  { 
    question: 'Which document is created during the planning phase to outline project risks?', 
    options: ['Risk Register', 'Project Charter', 'Stakeholder Register', 'Project Schedule'], 
    answer: 0 
  },
  { 
    question: 'What is a key characteristic of the Waterfall model?', 
    options: ['Iterative development', 'Flexible scope', 'Sequential phases', 'Continuous delivery'], 
    answer: 2 
  },
  { 
    question: 'Which phase involves monitoring and controlling project performance?', 
    options: ['Initiation', 'Planning', 'Execution', 'Monitoring and Controlling'], 
    answer: 3 
  },
  { 
    question: 'What is the primary purpose of the closing phase in Waterfall?', 
    options: ['To complete project deliverables', 'To obtain formal acceptance of the project', 'To develop the project plan', 'To test the product'], 
    answer: 1 
  },
  { question: 'What is the primary focus of the Waterfall model?', 
    options: ['Iterative development', 'Flexible scope', 'Sequential phases', 'Continuous delivery'], 
    answer: 2 
  },
  { question: 'Which phase involves defining the project scope and objectives?', 
    options: ['Initiation', 'Planning', 'Execution', 'Closing'], 
    answer: 0 
  },
  { question: 'What is the main output of the initiation phase?', 
    options: ['Project Charter', 'Risk Register', 'Project Schedule', 'Stakeholder Register'], 
    answer: 0 
  },
  { question: 'During which phase are detailed project requirements gathered?', 
    options: ['Initiation', 'Planning', 'Execution', 'Testing'], 
    answer: 1 
  },
  { question: 'What is the primary purpose of the execution phase?', 
    options: ['To complete project deliverables', 'To develop the project plan', 'To test the product', 'To close the project'], 
    answer: 0 
  },
  { question: 'Which document outlines the project’s objectives, scope, and deliverables?', 
    options: ['Project Charter', 'Risk Register', 'Project Schedule', 'Stakeholder Register'], 
    answer: 0 
  },
  { question: 'What is the main focus during the planning phase?', 
    options: ['Defining project scope', 'Developing the project plan', 'Executing project tasks', 'Testing the product'], 
    answer: 1 
  },
  { question: 'Which phase involves monitoring and controlling project performance?', 
    options: ['Initiation', 'Planning', 'Execution', 'Monitoring and Controlling'], 
    answer: 3 
  },
  { question: 'What is the primary purpose of the closing phase?', 
    options: ['To complete project deliverables', 'To obtain formal acceptance of the project', 'To develop the project plan', 'To test the product'], 
    answer: 1 
  },
  { question: 'What is a common tool used for tracking project progress?', 
    options: ['Kanban Board', 'Gantt Chart', 'Burndown Chart', 'Product Backlog'], 
    answer: 1 
  },
  { question: 'Which phase involves obtaining formal acceptance of the project deliverables?', 
    options: ['Initiation', 'Planning', 'Execution', 'Closing'], 
    answer: 3 
  },
  { question: 'What is the primary purpose of the testing phase?', 
    options: ['To gather requirements', 'To develop the product', 'To verify that the product meets requirements', 'To plan the project'], 
    answer: 2 
  },
  { question: 'Which document is created during the planning phase to outline project risks?', 
    options: ['Risk Register', 'Project Charter', 'Stakeholder Register', 'Project Schedule'], 
    answer: 0 
  },
  { question: 'What is the main focus of the initiation phase?', 
    options: ['Defining project scope', 'Developing the project plan', 'Executing project tasks', 'Testing the product'], 
    answer: 0 
  },
  { question: 'What is a key characteristic of the Waterfall model?', 
    options: ['Iterative development', 'Flexible scope', 'Sequential phases', 'Continuous delivery'], 
    answer: 2 
  },
  { 
    question: 'Which of the following is true about requirement gathering in Waterfall?', 
    options: ['Requirements are gathered continuously throughout the project', 'Requirements are defined at the beginning and remain unchanged', 'Requirements can be modified at any time during execution', 'Requirements are gathered only during testing'], 
    answer: 1 
  },
  { 
    question: 'In the Waterfall model, what happens if a defect is found during testing?', 
    options: ['It is fixed immediately and testing continues', 'It is documented and addressed in the next project phase', 'The entire project may need to revisit earlier phases', 'The defect is ignored if it is minor'], 
    answer: 2 
  },
  { 
    question: 'What is the main risk of following the Waterfall model in a rapidly changing environment?', 
    options: ['Lack of documentation', 'Inability to incorporate changes easily', 'Too much flexibility in requirements', 'Over-reliance on iterative feedback'], 
    answer: 1 
  },
  { 
    question: 'Which of the following best describes the role of stakeholders in the Waterfall model?', 
    options: ['Stakeholders provide continuous feedback throughout the project', 'Stakeholders are only involved at project closure', 'Stakeholders are primarily involved at the beginning and end of the project', 'Stakeholders dictate all project decisions during execution'], 
    answer: 2 
  },
  { 
    question: 'How does risk management typically occur in Waterfall projects?', 
    options: ['Risks are identified and mitigated continuously', 'Risk assessment is done primarily in the planning phase', 'Risks are addressed only during project execution', 'Risks are ignored until they become critical'], 
    answer: 1 
  },
  { 
    question: 'What happens if the project requirements change mid-way in a Waterfall project?', 
    options: ['Changes can be easily implemented without affecting the timeline', 'The project may require significant rework and approvals', 'The change is incorporated immediately without documentation', 'Changes are postponed until after project closure'], 
    answer: 1 
  },
  { 
    question: 'Which of the following best describes communication in the Waterfall model?', 
    options: ['Frequent informal communication with iterative feedback', 'Structured, document-driven communication at predefined milestones', 'Real-time adjustments based on team collaboration', 'Continuous verbal feedback loops without documentation'], 
    answer: 1 
  },
  { 
    question: 'In the Waterfall model, what is the primary purpose of the design phase?', 
    options: ['To test the final product', 'To establish a detailed system architecture and technical specifications', 'To execute project deliverables', 'To obtain formal acceptance of the project'], 
    answer: 1 
  },
  { 
    question: 'Why is Waterfall considered less suitable for complex software development projects?', 
    options: ['Because it lacks structure', 'Because it does not allow iterative development and adaptability', 'Because it does not require planning', 'Because it does not involve testing'], 
    answer: 1 
  },
  { 
    question: 'Which of the following is a key assumption of the Waterfall model?', 
    options: ['Project requirements will evolve throughout the lifecycle', 'All phases must be completed before moving to the next', 'Customer feedback is collected continuously', 'Developers can change project scope at any time'], 
    answer: 1 
  }
];

export default waterfallQuestions;
