const agileQuestions = [
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
  { 
    question: 'What is the role of a Product Owner in Agile?', 
    options: ['To manage the development team', 'To prioritize the product backlog', 'To write code for the project', 'To test the software'], 
    answer: 1 
  },
  { 
    question: 'Which ceremony is used to reflect on the past sprint and identify improvements?', 
    options: ['Sprint Planning', 'Daily Stand-up', 'Sprint Review', 'Sprint Retrospective'], 
    answer: 3 
  },
  { 
    question: 'What is a user story in Agile?', 
    options: ['A detailed project plan', 'A high-level requirement', 'A task assigned to a developer', 'A bug report'], 
    answer: 1 
  },
  { 
    question: 'What is the purpose of a burndown chart?', 
    options: ['To track project costs', 'To visualize work remaining in a sprint', 'To allocate resources', 'To document project requirements'], 
    answer: 1 
  },
  { 
    question: 'Which Agile practice involves continuous integration and delivery?', 
    options: ['Scrum', 'Kanban', 'DevOps', 'Lean'], 
    answer: 2 
  },
  { 
    question: 'What is the main purpose of a Sprint Planning meeting?', 
    options: ['To review the previous sprint', 'To plan the work for the upcoming sprint', 'To discuss long-term project goals', 'To allocate resources for the project'], 
    answer: 1 
  },
  { 
    question: 'Which Agile role is responsible for removing impediments?', 
    options: ['Product Owner', 'Scrum Master', 'Development Team', 'Stakeholder'], 
    answer: 1 
  },
  { 
    question: 'What is the purpose of a spike in Agile?', 
    options: ['To complete a user story', 'To gather information or conduct research', 'To test the software', 'To plan the sprint'], 
    answer: 1 
  },
  { 
    question: 'Which Agile framework focuses on continuous flow and limiting work in progress?', 
    options: ['Scrum', 'Kanban', 'Lean', 'Extreme Programming (XP)'], 
    answer: 1 
  },
  { 
    question: 'What is the INVEST criteria used for in Agile?', 
    options: ['To prioritize the product backlog', 'To write effective user stories', 'To plan the sprint', 'To allocate resources'], 
    answer: 1 
  },
  { 
    question: 'What is the purpose of a release planning meeting in Agile?', 
    options: ['To plan the work for the next sprint', 'To define the overall project roadmap', 'To allocate resources for the project', 'To review the previous sprint'], 
    answer: 1 
  },
  { 
    question: 'Which Agile practice involves pair programming?', 
    options: ['Scrum', 'Kanban', 'Extreme Programming (XP)', 'Lean'], 
    answer: 2 
  },
  { 
    question: 'What is the main benefit of using Agile methodologies?', 
    options: ['Strict adherence to timelines', 'Flexibility to adapt to changes', 'Detailed project documentation', 'Sequential completion of project phases'], 
    answer: 1 
  },
  { 
    question: 'Which role is responsible for maximizing the value of the product in Agile?', 
    options: ['Scrum Master', 'Product Owner', 'Development Team', 'Stakeholder'], 
    answer: 1 
  },
  { 
    question: 'What is the purpose of a backlog refinement meeting?', 
    options: ['To prioritize the product backlog', 'To review the previous sprint', 'To allocate resources for the project', 'To plan the work for the next sprint'], 
    answer: 0 
  },
  { 
    question: 'What is the purpose of a sprint backlog?', 
    options: ['To list all tasks for the entire project', 'To list tasks to be completed in the current sprint', 'To track project costs', 'To document project requirements'], 
    answer: 1 
  },
  { 
    question: 'Which Agile principle emphasizes delivering working software frequently?', 
    options: ['Customer collaboration', 'Responding to change', 'Working software', 'Individuals and interactions'], 
    answer: 2 
  },
  { 
    question: 'What is the role of a Scrum Master?', 
    options: ['To manage the development team', 'To prioritize the product backlog', 'To facilitate Scrum ceremonies and remove impediments', 'To test the software'], 
    answer: 2 
  },
  { 
    question: 'What is a common technique used for estimating user stories in Agile?', 
    options: ['Gantt Chart', 'PERT Chart', 'Story Points', 'Critical Path Method'], 
    answer: 2 
  },
  { 
    question: 'Which Agile framework uses a visual board to manage work?', 
    options: ['Scrum', 'Kanban', 'Lean', 'Extreme Programming (XP)'], 
    answer: 1 
  },
  { 
    question: 'What is the purpose of a daily stand-up meeting?', 
    options: ['To review project costs', 'To discuss long-term goals', 'To ensure team alignment and identify roadblocks', 'To allocate tasks for the entire project'], 
    answer: 2 
  },
  { 
    question: 'Which Agile practice involves delivering small, incremental changes to the product?', 
    options: ['Scrum', 'Kanban', 'Continuous Delivery', 'Lean'], 
    answer: 2 
  },
  { 
    question: 'Which role is responsible for defining the product vision in Agile?', 
    options: ['Scrum Master', 'Product Owner', 'Development Team', 'Stakeholder'], 
    answer: 1 
  },
  { 
    question: 'What is the purpose of a sprint retrospective?', 
    options: ['To review the project costs', 'To ensure the project stays on track', 'To showcase completed work', 'To reflect on the sprint and identify improvements'], 
    answer: 3 
  },
  { 
    question: 'Which Agile framework uses the concept of "time-boxed" iterations?', 
    options: ['Scrum', 'Kanban', 'Lean', 'Extreme Programming (XP)'], 
    answer: 0 
  },
  { 
    question: 'What is the purpose of a product backlog?', 
    options: ['To list all tasks for the entire project', 'To list tasks to be completed in the current sprint', 'To track project costs', 'To prioritize and manage user stories and requirements'], 
    answer: 3 
  },
  { 
    question: 'Which Agile principle emphasizes customer collaboration?', 
    options: ['Customer collaboration', 'Responding to change', 'Working software', 'Individuals and interactions'], 
    answer: 0 
  },
  { 
    question: 'What is the role of a development team in Agile?', 
    options: ['To manage the project', 'To prioritize the product backlog', 'To develop and deliver the product', 'To test the software'], 
    answer: 3 
  },
  { 
    question: 'Which Agile framework uses the concept of "user stories"?', 
    options: ['Scrum', 'Kanban', 'Lean', 'Extreme Programming (XP)'], 
    answer: 0 
  },
  { 
    question: 'What is the purpose of a sprint goal?', 
    options: ['To list all tasks for the entire project', 'To define the objective of the sprint', 'To track project costs', 'To document project requirements'], 
    answer: 1 
  },
  { 
    question: 'Which Agile principle emphasizes responding to change?', 
    options: ['Customer collaboration', 'Responding to change', 'Working software', 'Individuals and interactions'], 
    answer: 1 
  },
  { 
    question: 'What is the role of a stakeholder in Agile?', 
    options: ['To manage the project', 'To prioritize the product backlog', 'To provide feedback and requirements', 'To test the software'], 
    answer: 2 
  },
  {
    "question": "Which Agile framework is designed for scaling Agile across large enterprises?",
    "options": ["Scrum", "SAFe (Scaled Agile Framework)", "Extreme Programming (XP)", "Kanban"],
    "answer": 1
  },
  {
    "question": "What is the primary goal of Agile leadership?",
    "options": ["To enforce strict processes", "To empower teams and foster collaboration", "To track individual performance closely", "To control every aspect of the project"],
    "answer": 1
  },
  {
    "question": "In Agile, what is a common technique used for prioritizing backlog items?",
    "options": ["Waterfall Method", "MoSCoW Prioritization", "PERT Chart", "Critical Path Analysis"],
    "answer": 1
  },
  {
    "question": "What does the 'WIP limit' in Kanban refer to?",
    "options": ["The maximum amount of work allowed in progress at any time", "The number of user stories in the backlog", "The total project duration", "The estimated story points for a sprint"],
    "answer": 0
  },
  {
    "question": "Which of the following is NOT a core value of the Agile Manifesto?",
    "options": ["Individuals and interactions over processes and tools", "Comprehensive documentation over working software", "Customer collaboration over contract negotiation", "Responding to change over following a plan"],
    "answer": 1
  },
  {
    "question": "What is a key characteristic of Agile contracts?",
    "options": ["They are strictly fixed in scope and timeline", "They prioritize flexibility and value delivery", "They follow a traditional waterfall model", "They exclude client involvement during development"],
    "answer": 1
  },
  {
    "question": "What is a common Agile approach to estimating effort in a sprint?",
    "options": ["Story Points", "Hours Worked", "Percentage of Completion", "Cost Estimates"],
    "answer": 0
  },
  {
    "question": "Which of the following best describes a Definition of Ready (DoR) in Agile?",
    "options": ["A set of criteria that a user story must meet before it is accepted as complete", "A checklist ensuring a backlog item is clear, feasible, and ready to be worked on", "A list of all backlog items for the sprint", "A report summarizing sprint outcomes"],
    "answer": 1
  },
  {
    "question": "What is an Agile release train in SAFe?",
    "options": ["A continuous integration pipeline for Agile teams", "A time-boxed iteration used in Extreme Programming", "A team of teams that work together on a shared Agile cadence", "A method for managing backlog prioritization"],
    "answer": 2
  },
  {
    "question": "Which Agile framework emphasizes fixed-length iterations and strict roles like Release Train Engineer?",
    "options": ["Scrum", "Extreme Programming (XP)", "SAFe (Scaled Agile Framework)", "Lean"],
    "answer": 2
  },
  {
    "question": "What is the purpose of a sprint demo in Agile?",
    "options": ["To review project costs", "To showcase completed work to stakeholders", "To plan the next sprint", "To allocate resources for the project"],
    "answer": 1
  },
  {
    "question": "What is the role of a Release Train Engineer in SAFe?",
    "options": ["To manage the development team", "To facilitate Agile Release Train processes and execution", "To prioritize the product backlog", "To test the software"],
    "answer": 2
  },
  {
    "question": "What is the purpose of a Scrum of Scrums meeting?",
    "options": ["To review project costs", "To ensure alignment and coordination across multiple Scrum teams", "To plan the next sprint", "To allocate resources for the project"],
    "answer": 1
  }
];

export default agileQuestions;
