const scenarioQuestions = [
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
  { 
    question: 'A project is running behind schedule. What should the project manager do first?', 
    options: ['Request additional resources', 'Update the project schedule', 'Analyze the cause of the delay', 'Inform the stakeholders'], 
    answer: 2 
  },
  { 
    question: 'A team member identifies a risk that was not previously documented. What should the project manager do?', 
    options: ['Ignore the risk', 'Document the risk and develop a response plan', 'Escalate the risk to senior management', 'Assign the risk to a team member'], 
    answer: 1 
  },
  { 
    question: 'A stakeholder is not satisfied with the project progress. What is the best course of action?', 
    options: ['Ignore the stakeholder', 'Schedule a meeting to address concerns', 'Change the project plan', 'Remove the stakeholder from the project'], 
    answer: 1 
  },
  { 
    question: 'During a project review, a significant issue is identified. What should the project manager do?', 
    options: ['Ignore the issue', 'Develop a mitigation plan', 'Escalate the issue immediately', 'Blame the team'], 
    answer: 1 
  },
  { 
    question: 'A project team is facing a conflict. What is the best way to resolve it?', 
    options: ['Ignore the conflict', 'Facilitate a discussion to resolve the conflict', 'Escalate the conflict to senior management', 'Assign blame to one team member'], 
    answer: 1 
  },
  { 
    question: 'A project is over budget. What should the project manager do first?', 
    options: ['Request additional funding', 'Analyze the cause of the overage', 'Reduce project scope', 'Inform the stakeholders'], 
    answer: 1 
  },
  { 
    question: 'A team member is consistently missing deadlines. What should the project manager do?', 
    options: ['Ignore the issue', 'Discuss the issue with the team member', 'Reassign the team member', 'Escalate the issue to senior management'], 
    answer: 1 
  },
  { 
    question: 'A stakeholder requests a change that will impact the project timeline. What should the project manager do?', 
    options: ['Approve the change', 'Reject the change', 'Analyze the impact and discuss with the stakeholder', 'Implement the change immediately'], 
    answer: 2 
  },
  { 
    question: 'A project team is facing a technical challenge. What is the best course of action?', 
    options: ['Ignore the challenge', 'Seek expert advice', 'Reassign the task', 'Delay the project'], 
    answer: 1 
  },
  { 
    question: 'A key resource is unavailable for a critical task. What should the project manager do?', 
    options: ['Reassign the task to another resource', 'Delay the project', 'Escalate the issue to senior management', 'Cancel the task'], 
    answer: 0 
  },
  { 
    question: 'A project is facing a significant risk. What should the project manager do first?', 
    options: ['Ignore the risk', 'Develop a risk response plan', 'Escalate the risk to senior management', 'Communicate the risk to stakeholders'], 
    answer: 1 
  },
  { 
    question: 'A team member is not performing well. What should the project manager do?', 
    options: ['Ignore the issue', 'Discuss the issue with the team member', 'Reassign the team member', 'Escalate the issue to senior management'], 
    answer: 1 
  },
  { 
    question: 'A stakeholder requests a change that will increase project costs. What should the project manager do?', 
    options: ['Approve the change', 'Reject the change', 'Analyze the impact and discuss with the stakeholder', 'Implement the change immediately'], 
    answer: 2 
  },
  { 
    question: 'A project team is facing a resource constraint. What is the best course of action?', 
    options: ['Ignore the constraint', 'Seek additional resources', 'Reassign tasks', 'Delay the project'], 
    answer: 1 
  },
  { 
    question: 'A key stakeholder is not engaged in the project. What should the project manager do?', 
    options: ['Ignore the stakeholder', 'Schedule a meeting to discuss engagement', 'Remove the stakeholder from the project', 'Escalate the issue to senior management'], 
    answer: 1 
  },
  { 
    question: 'A project is delayed due to unforeseen technical issues. What should the project manager do first?', 
    options: ['Ignore the issue', 'Analyze the impact and develop a mitigation plan', 'Escalate the issue to senior management', 'Blame the team'], 
    answer: 1 
  },
  { 
    question: 'A team member is consistently missing deadlines. What should the project manager do?', 
    options: ['Ignore the issue', 'Discuss the issue with the team member', 'Reassign the team member', 'Escalate the issue to senior management'], 
    answer: 1 
  },
  { 
    question: 'A project is running over budget. What should the project manager do first?', 
    options: ['Request additional funding', 'Analyze the cause of the overage', 'Reduce project scope', 'Inform the stakeholders'], 
    answer: 1 
  },
  { 
    question: 'A key stakeholder is not engaged in the project. What should the project manager do?', 
    options: ['Ignore the stakeholder', 'Schedule a meeting to discuss engagement', 'Remove the stakeholder from the project', 'Escalate the issue to senior management'], 
    answer: 1 
  },
  { 
    question: 'A project team is facing a resource constraint. What is the best course of action?', 
    options: ['Ignore the constraint', 'Seek additional resources', 'Reassign tasks', 'Delay the project'], 
    answer: 1 
  },
  { 
    question: 'A stakeholder requests a change that will impact the project timeline. What should the project manager do?', 
    options: ['Approve the change', 'Reject the change', 'Analyze the impact and discuss with the stakeholder', 'Implement the change immediately'], 
    answer: 2 
  },
  { 
    question: 'A team member identifies a risk that was not previously documented. What should the project manager do?', 
    options: ['Ignore the risk', 'Document the risk and develop a response plan', 'Escalate the risk to senior management', 'Assign the risk to a team member'], 
    answer: 1 
  },
  { 
    question: 'A project is running behind schedule. What should the project manager do first?', 
    options: ['Request additional resources', 'Update the project schedule', 'Analyze the cause of the delay', 'Inform the stakeholders'], 
    answer: 2 
  },
  { 
    question: 'A key resource is unavailable for a critical task. What should the project manager do?', 
    options: ['Reassign the task to another resource', 'Delay the project', 'Escalate the issue to senior management', 'Cancel the task'], 
    answer: 0 
  },
  { 
    question: 'A project team is facing a technical challenge. What is the best course of action?', 
    options: ['Ignore the challenge', 'Seek expert advice', 'Reassign the task', 'Delay the project'], 
    answer: 1 
  },
  { 
    question: 'A stakeholder is not satisfied with the project progress. What is the best course of action?', 
    options: ['Ignore the stakeholder', 'Schedule a meeting to address concerns', 'Change the project plan', 'Remove the stakeholder from the project'], 
    answer: 1 
  },
  { 
    question: 'During a project review, a significant issue is identified. What should the project manager do?', 
    options: ['Ignore the issue', 'Develop a mitigation plan', 'Escalate the issue immediately', 'Blame the team'], 
    answer: 1 
  },
  { 
    question: 'A project is facing a significant risk. What should the project manager do first?', 
    options: ['Ignore the risk', 'Develop a risk response plan', 'Escalate the risk to senior management', 'Communicate the risk to stakeholders'], 
    answer: 1 
  },
  { 
    question: 'A team member is not performing well. What should the project manager do?', 
    options: ['Ignore the issue', 'Discuss the issue with the team member', 'Reassign the team member', 'Escalate the issue to senior management'], 
    answer: 1 
  },
  { 
    question: 'A client requests an additional feature late in the project. What is the first thing the project manager should do?', 
    options: ['Analyze the impact on scope, time, and cost', 'Implement the change immediately', 'Add it to the project without further discussion', 'Reject the request to maintain the timeline'], 
    answer: 0 
  },
  { question: 'A project sponsor requests a status update. What should the project manager do?', 
    options: ['Ignore the request', 'Provide a detailed status report', 'Escalate the request to senior management', 'Delay the response'], 
    answer: 1 
  },
  { question: 'A team member suggests a new tool that could improve efficiency. What should the project manager do?', 
    options: ['Ignore the suggestion', 'Evaluate the tool and its impact', 'Implement the tool immediately', 'Reject the suggestion'], 
    answer: 1 
  },
  { question: 'A project is nearing its deadline, but some tasks are incomplete. What should the project manager do?', 
    options: ['Ignore the incomplete tasks', 'Extend the deadline', 'Prioritize and allocate resources to complete the tasks', 'Cancel the project'], 
    answer: 2 
  },
  { question: 'A stakeholder is concerned about the project’s quality. What should the project manager do?', 
    options: ['Ignore the concern', 'Schedule a meeting to address the concern', 'Escalate the concern to senior management', 'Blame the team'], 
    answer: 1 
  },
  { question: 'A project team member identifies a new risk. What should the project manager do first?', 
    options: ['Ignore the risk', 'Document the risk and assess its impact', 'Escalate the risk to senior management', 'Assign the risk to a team member'], 
    answer: 1 
  },
  { question: 'A stakeholder is unhappy with the project’s progress. What should the project manager do?', 
    options: ['Ignore the stakeholder', 'Schedule a meeting to address concerns', 'Change the project plan', 'Remove the stakeholder from the project'], 
    answer: 1 
  },
  { question: 'A project is behind schedule due to unforeseen issues. What should the project manager do first?', 
    options: ['Ignore the issues', 'Analyze the impact and develop a mitigation plan', 'Escalate the issues to senior management', 'Blame the team'], 
    answer: 1 
  },
  { question: 'A team member suggests a process improvement. What should the project manager do?', 
    options: ['Ignore the suggestion', 'Evaluate the suggestion and its impact', 'Implement the suggestion immediately', 'Reject the suggestion'], 
    answer: 1 
  },
  { question: 'A project is over budget. What should the project manager do first?', 
    options: ['Request additional funding', 'Analyze the cause of the overage', 'Reduce project scope', 'Inform the stakeholders'], 
    answer: 1 
  },
  { question: 'A key stakeholder requests a change that will delay the project. What should the project manager do?', 
    options: ['Approve the change', 'Reject the change', 'Analyze the impact and discuss with the stakeholder', 'Implement the change immediately'], 
    answer: 2 
  },
  { question: 'A project team is facing a conflict. What is the best way to resolve it?', 
    options: ['Ignore the conflict', 'Facilitate a discussion to resolve the conflict', 'Escalate the conflict to senior management', 'Assign blame to one team member'], 
    answer: 1 
  },
  { question: 'A project is nearing its deadline, but some tasks are incomplete. What should the project manager do?', 
    options: ['Ignore the incomplete tasks', 'Extend the deadline', 'Prioritize and allocate resources to complete the tasks', 'Cancel the project'], 
    answer: 2 
  },
  { question: 'A stakeholder is concerned about the project’s quality. What should the project manager do?', 
    options: ['Ignore the concern', 'Schedule a meeting to address the concern', 'Escalate the concern to senior management', 'Blame the team'], 
    answer: 1 
  },
  { question: 'A project sponsor requests a status update. What should the project manager do?', 
    options: ['Ignore the request', 'Provide a detailed status report', 'Escalate the request to senior management', 'Delay the response'], 
    answer: 1 
  },
  { question: 'A project team is facing a sudden budget cut. What should the project manager do first?', 
    options: ['Ignore the budget cut', 'Analyze the impact on the project and develop a revised plan', 'Escalate the issue to senior management', 'Cancel the project'], 
    answer: 1 
  }
];

export default scenarioQuestions;