const scenarioQuestions = [
  {
    "topics": ["Scenario"],
    "question": "During a project, a stakeholder requests a change. What is the first step?",
    "options": [
      "Approve the change",
      "Analyze the impact",
      "Implement immediately",
      "Reject the change"
    ],
    "answers": [1],
    "explanation": "The first step is to analyze the impact of the change on the project's scope, time, and cost before making a decision.",
    "source": "ChatGPT"
  },
  {
    "topics": ["Scenario"],
    "question": "A team member reports a delay due to resource unavailability. What should the project manager do?",
    "options": [
      "Reassign resources",
      "Escalate to sponsor",
      "Update the schedule",
      "Conduct a team meeting"
    ],
    "answers": [3],
    "explanation": "Conducting a team meeting helps to understand the issue better and find a collaborative solution.",
    "source": "ChatGPT"
  },
  {
    "topics": ["Scenario"],
    "question": "A client requests an additional feature late in the project. What is the first thing the project manager should do?",
    "options": [
      "Analyze the impact on scope, time, and cost",
      "Implement the change immediately",
      "Add it to the project without further discussion",
      "Reject the request to maintain the timeline"
    ],
    "answers": [0],
    "explanation": "The project manager should first analyze the impact of the additional feature on the project's scope, time, and cost.",
    "source": "ChatGPT"
  },
  {
    "topics": ["Scenario"],
    "question": "A key stakeholder has conflicting priorities. How should the project manager handle this?",
    "options": [
      "Ignore the conflict and proceed as planned",
      "Escalate the issue to the project sponsor",
      "Facilitate a discussion to align priorities",
      "Remove the stakeholder from the project"
    ],
    "answers": [2],
    "explanation": "Facilitating a discussion helps to align priorities and resolve conflicts among stakeholders.",
    "source": "ChatGPT"
  },
  {
    "topics": ["Scenario"],
    "question": "During a risk review meeting, the team identifies a potential delay due to supplier issues. What is the next step?",
    "options": [
      "Add the risk to the risk register and develop a mitigation plan",
      "Escalate the risk to senior management immediately",
      "Ignore the risk as it has not yet occurred",
      "Communicate the risk to the customer without a plan"
    ],
    "answers": [0],
    "explanation": "Adding the risk to the risk register and developing a mitigation plan helps to manage the risk proactively.",
    "source": "ChatGPT"
  },
  {
    "topics": ["Scenario"],
    "question": "A project is running behind schedule. What should the project manager do first?",
    "options": [
      "Request additional resources",
      "Update the project schedule",
      "Analyze the cause of the delay",
      "Inform the stakeholders"
    ],
    "answers": [2],
    "explanation": "Analyzing the cause of the delay helps to identify the root cause and take appropriate corrective actions.",
    "source": "ChatGPT"
  },
  {
    "topics": ["Scenario"],
    "question": "A team member identifies a risk that was not previously documented. What should the project manager do?",
    "options": [
      "Ignore the risk",
      "Document the risk and develop a response plan",
      "Escalate the risk to senior management",
      "Assign the risk to a team member"
    ],
    "answers": [1],
    "explanation": "Documenting the risk and developing a response plan helps to manage the risk effectively.",
    "source": "ChatGPT"
  },
  {
    "topics": ["Scenario"],
    "question": "A stakeholder is not satisfied with the project progress. What is the best course of action?",
    "options": [
      "Ignore the stakeholder",
      "Schedule a meeting to address concerns",
      "Change the project plan",
      "Remove the stakeholder from the project"
    ],
    "answers": [1],
    "explanation": "Scheduling a meeting helps to address the stakeholder's concerns and find a resolution.",
    "source": "ChatGPT"
  },
  {
    "topics": ["Scenario"],
    "question": "During a project review, a significant issue is identified. What should the project manager do?",
    "options": [
      "Ignore the issue",
      "Develop a mitigation plan",
      "Escalate the issue immediately",
      "Blame the team"
    ],
    "answers": [1],
    "explanation": "Developing a mitigation plan helps to address the issue and minimize its impact on the project.",
    "source": "ChatGPT"
  },
  {
    "topics": ["Scenario"],
    "question": "A project team is facing a conflict. What is the best way to resolve it?",
    "options": [
      "Ignore the conflict",
      "Facilitate a discussion to resolve the conflict",
      "Escalate the conflict to senior management",
      "Assign blame to one team member"
    ],
    "answers": [1],
    "explanation": "Facilitating a discussion helps to resolve the conflict and improve team collaboration.",
    "source": "ChatGPT"
  },
  {
    "topics": ["Scenario"],
    "question": "A project is over budget. What should the project manager do first?",
    "options": [
      "Request additional funding",
      "Analyze the cause of the overage",
      "Reduce project scope",
      "Inform the stakeholders"
    ],
    "answers": [1],
    "explanation": "Analyzing the cause of the overage helps to identify the root cause and take appropriate corrective actions.",
    "source": "ChatGPT"
  },
  {
    "topics": ["Scenario"],
    "question": "A team member is consistently missing deadlines. What should the project manager do?",
    "options": [
      "Ignore the issue",
      "Discuss the issue with the team member",
      "Reassign the team member",
      "Escalate the issue to senior management"
    ],
    "answers": [1],
    "explanation": "Discussing the issue with the team member helps to understand the reasons for the missed deadlines and find a solution.",
    "source": "ChatGPT"
  },
  {
    "topics": ["Scenario"],
    "question": "A stakeholder requests a change that will impact the project timeline. What should the project manager do?",
    "options": [
      "Approve the change",
      "Reject the change",
      "Analyze the impact and discuss with the stakeholder",
      "Implement the change immediately"
    ],
    "answers": [2],
    "explanation": "Analyzing the impact and discussing with the stakeholder helps to make an informed decision about the change request.",
    "source": "ChatGPT"
  },
  {
    "topics": ["Scenario"],
    "question": "A project team is facing a technical challenge. What is the best course of action?",
    "options": [
      "Ignore the challenge",
      "Seek expert advice",
      "Reassign the task",
      "Delay the project"
    ],
    "answers": [1],
    "explanation": "Seeking expert advice helps to find a solution to the technical challenge and move the project forward.",
    "source": "ChatGPT"
  },
  {
    "topics": ["Scenario"],
    "question": "A key resource is unavailable for a critical task. What should the project manager do?",
    "options": [
      "Reassign the task to another resource",
      "Delay the project",
      "Escalate the issue to senior management",
      "Cancel the task"
    ],
    "answers": [0],
    "explanation": "Reassigning the task to another resource helps to keep the project on track and avoid delays.",
    "source": "ChatGPT"
  },
  {
    "topics": ["Scenario"],
    "question": "A project is facing a significant risk. What should the project manager do first?",
    "options": [
      "Ignore the risk",
      "Develop a risk response plan",
      "Escalate the risk to senior management",
      "Communicate the risk to stakeholders"
    ],
    "answers": [1],
    "explanation": "Developing a risk response plan helps to manage the risk effectively and minimize its impact on the project.",
    "source": "ChatGPT"
  },
  {
    "topics": ["Scenario"],
    "question": "A team member is not performing well. What should the project manager do?",
    "options": [
      "Ignore the issue",
      "Discuss the issue with the team member",
      "Reassign the team member",
      "Escalate the issue to senior management"
    ],
    "answers": [1],
    "explanation": "Discussing the issue with the team member helps to understand the reasons for the poor performance and find a solution.",
    "source": "ChatGPT"
  },
  {
    "topics": ["Scenario"],
    "question": "A stakeholder requests a change that will increase project costs. What should the project manager do?",
    "options": [
      "Approve the change",
      "Reject the change",
      "Analyze the impact and discuss with the stakeholder",
      "Implement the change immediately"
    ],
    "answers": [2],
    "explanation": "Analyzing the impact and discussing with the stakeholder helps to make an informed decision about the change request.",
    "source": "ChatGPT"
  },
  {
    "topics": ["Scenario"],
    "question": "A project team is facing a resource constraint. What is the best course of action?",
    "options": [
      "Ignore the constraint",
      "Seek additional resources",
      "Reassign tasks",
      "Delay the project"
    ],
    "answers": [1],
    "explanation": "Seeking additional resources helps to address the resource constraint and keep the project on track.",
    "source": "ChatGPT"
  },
  {
    "topics": ["Scenario"],
    "question": "A key stakeholder is not engaged in the project. What should the project manager do?",
    "options": [
      "Ignore the stakeholder",
      "Schedule a meeting to discuss engagement",
      "Remove the stakeholder from the project",
      "Escalate the issue to senior management"
    ],
    "answers": [1],
    "explanation": "Scheduling a meeting helps to discuss the stakeholder's engagement and find ways to improve it.",
    "source": "ChatGPT"
  },
  {
    "topics": ["Scenario"],
    "question": "A project is delayed due to unforeseen technical issues. What should the project manager do first?",
    "options": [
      "Ignore the issue",
      "Analyze the impact and develop a mitigation plan",
      "Escalate the issue to senior management",
      "Blame the team"
    ],
    "answers": [1],
    "explanation": "Analyzing the impact and developing a mitigation plan helps to address the technical issues and minimize their impact on the project.",
    "source": "ChatGPT"
  },
  {
    "topics": ["Scenario"],
    "question": "A team member is consistently missing deadlines. What should the project manager do?",
    "options": [
      "Ignore the issue",
      "Discuss the issue with the team member",
      "Reassign the team member",
      "Escalate the issue to senior management"
    ],
    "answers": [1],
    "explanation": "Discussing the issue with the team member helps to understand the reasons for the missed deadlines and find a solution.",
    "source": "ChatGPT"
  },
  {
    "topics": ["Scenario"],
    "question": "A project is running over budget. What should the project manager do first?",
    "options": [
      "Request additional funding",
      "Analyze the cause of the overage",
      "Reduce project scope",
      "Inform the stakeholders"
    ],
    "answers": [1],
    "explanation": "Analyzing the cause of the overage helps to identify the root cause and take appropriate corrective actions.",
    "source": "ChatGPT"
  },
  {
    "topics": ["Scenario"],
    "question": "A key stakeholder is not engaged in the project. What should the project manager do?",
    "options": [
      "Ignore the stakeholder",
      "Schedule a meeting to discuss engagement",
      "Remove the stakeholder from the project",
      "Escalate the issue to senior management"
    ],
    "answers": [1],
    "explanation": "Scheduling a meeting helps to discuss the stakeholder's engagement and find ways to improve it.",
    "source": "ChatGPT"
  },
  {
    "topics": ["Scenario"],
    "question": "A project team is facing a resource constraint. What is the best course of action?",
    "options": [
      "Ignore the constraint",
      "Seek additional resources",
      "Reassign tasks",
      "Delay the project"
    ],
    "answers": [1],
    "explanation": "Seeking additional resources helps to address the resource constraint and keep the project on track.",
    "source": "ChatGPT"
  },
  {
    "topics": ["Scenario"],
    "question": "A stakeholder requests a change that will impact the project timeline. What should the project manager do?",
    "options": [
      "Approve the change",
      "Reject the change",
      "Analyze the impact and discuss with the stakeholder",
      "Implement the change immediately"
    ],
    "answers": [2],
    "explanation": "Analyzing the impact and discussing with the stakeholder helps to make an informed decision about the change request.",
    "source": "ChatGPT"
  },
  {
    "topics": ["Scenario"],
    "question": "A team member identifies a risk that was not previously documented. What should the project manager do?",
    "options": [
      "Ignore the risk",
      "Document the risk and develop a response plan",
      "Escalate the risk to senior management",
      "Assign the risk to a team member"
    ],
    "answers": [1],
    "explanation": "Documenting the risk and developing a response plan helps to manage the risk effectively.",
    "source": "ChatGPT"
  },
  {
    "topics": ["Scenario"],
    "question": "A project is running behind schedule. What should the project manager do first?",
    "options": [
      "Request additional resources",
      "Update the project schedule",
      "Analyze the cause of the delay",
      "Inform the stakeholders"
    ],
    "answers": [2],
    "explanation": "Analyzing the cause of the delay helps to identify the root cause and take appropriate corrective actions.",
    "source": "ChatGPT"
  },
  {
    "topics": ["Scenario"],
    "question": "A key resource is unavailable for a critical task. What should the project manager do?",
    "options": [
      "Reassign the task to another resource",
      "Delay the project",
      "Escalate the issue to senior management",
      "Cancel the task"
    ],
    "answers": [0],
    "explanation": "Reassigning the task to another resource helps to keep the project on track and avoid delays.",
    "source": "ChatGPT"
  },
  {
    "topics": ["Scenario"],
    "question": "A project team is facing a technical challenge. What is the best course of action?",
    "options": [
      "Ignore the challenge",
      "Seek expert advice",
      "Reassign the task",
      "Delay the project"
    ],
    "answers": [1],
    "explanation": "Seeking expert advice helps to find a solution to the technical challenge and move the project forward.",
    "source": "ChatGPT"
  },
  {
    "topics": ["Scenario"],
    "question": "A stakeholder is not satisfied with the project progress. What is the best course of action?",
    "options": [
      "Ignore the stakeholder",
      "Schedule a meeting to address concerns",
      "Change the project plan",
      "Remove the stakeholder from the project"
    ],
    "answers": [1],
    "explanation": "Scheduling a meeting helps to address the stakeholder's concerns and find a resolution.",
    "source": "ChatGPT"
  },
  {
    "topics": ["Scenario"],
    "question": "During a project review, a significant issue is identified. What should the project manager do?",
    "options": [
      "Ignore the issue",
      "Develop a mitigation plan",
      "Escalate the issue immediately",
      "Blame the team"
    ],
    "answers": [1],
    "explanation": "Developing a mitigation plan helps to address the issue and minimize its impact on the project.",
    "source": "ChatGPT"
  },
  {
    "topics": ["Scenario"],
    "question": "A project is facing a significant risk. What should the project manager do first?",
    "options": [
      "Ignore the risk",
      "Develop a risk response plan",
      "Escalate the risk to senior management",
      "Communicate the risk to stakeholders"
    ],
    "answers": [1],
    "explanation": "Developing a risk response plan helps to manage the risk effectively and minimize its impact on the project.",
    "source": "ChatGPT"
  },
  {
    "topics": ["Scenario"],
    "question": "A team member is not performing well. What should the project manager do?",
    "options": [
      "Ignore the issue",
      "Discuss the issue with the team member",
      "Reassign the team member",
      "Escalate the issue to senior management"
    ],
    "answers": [1],
    "explanation": "Discussing the issue with the team member helps to understand the reasons for the poor performance and find a solution.",
    "source": "ChatGPT"
  },
  {
    "topics": ["Scenario"],
    "question": "A client requests an additional feature late in the project. What is the first thing the project manager should do?",
    "options": [
      "Analyze the impact on scope, time, and cost",
      "Implement the change immediately",
      "Add it to the project without further discussion",
      "Reject the request to maintain the timeline"
    ],
    "answers": [0],
    "explanation": "The project manager should first analyze the impact of the additional feature on the project's scope, time, and cost.",
    "source": "ChatGPT"
  },
  {
    "topics": ["Scenario"],
    "question": "A project sponsor requests a status update. What should the project manager do?",
    "options": [
      "Ignore the request",
      "Provide a detailed status report",
      "Escalate the request to senior management",
      "Delay the response"
    ],
    "answers": [1],
    "explanation": "Providing a detailed status report helps to keep the project sponsor informed about the project's progress.",
    "source": "ChatGPT"
  },
  {
    "topics": ["Scenario"],
    "question": "A team member suggests a new tool that could improve efficiency. What should the project manager do?",
    "options": [
      "Ignore the suggestion",
      "Evaluate the tool and its impact",
      "Implement the tool immediately",
      "Reject the suggestion"
    ],
    "answers": [1],
    "explanation": "Evaluating the tool and its impact helps to determine if it can improve efficiency and benefit the project.",
    "source": "ChatGPT"
  },
  {
    "topics": ["Scenario"],
    "question": "A project is nearing its deadline, but some tasks are incomplete. What should the project manager do?",
    "options": [
      "Ignore the incomplete tasks",
      "Extend the deadline",
      "Prioritize and allocate resources to complete the tasks",
      "Cancel the project"
    ],
    "answers": [2],
    "explanation": "Prioritizing and allocating resources helps to complete the tasks and meet the project deadline.",
    "source": "ChatGPT"
  },
  {
    "topics": ["Scenario"],
    "question": "A stakeholder is concerned about the project’s quality. What should the project manager do?",
    "options": [
      "Ignore the concern",
      "Schedule a meeting to address the concern",
      "Escalate the concern to senior management",
      "Blame the team"
    ],
    "answers": [1],
    "explanation": "Scheduling a meeting helps to address the stakeholder's concern about the project's quality and find a resolution.",
    "source": "ChatGPT"
  },
  {
    "topics": ["Scenario"],
    "question": "A project team member identifies a new risk. What should the project manager do first?",
    "options": [
      "Ignore the risk",
      "Document the risk and assess its impact",
      "Escalate the risk to senior management",
      "Assign the risk to a team member"
    ],
    "answers": [1],
    "explanation": "Documenting the risk and assessing its impact helps to manage the risk effectively.",
    "source": "ChatGPT"
  },
  {
    "topics": ["Scenario"],
    "question": "A stakeholder is unhappy with the project’s progress. What should the project manager do?",
    "options": [
      "Ignore the stakeholder",
      "Schedule a meeting to address concerns",
      "Change the project plan",
      "Remove the stakeholder from the project"
    ],
    "answers": [1],
    "explanation": "Scheduling a meeting helps to address the stakeholder's concerns and find a resolution.",
    "source": "ChatGPT"
  },
  {
    "topics": ["Scenario"],
    "question": "A project is behind schedule due to unforeseen issues. What should the project manager do first?",
    "options": [
      "Ignore the issues",
      "Analyze the impact and develop a mitigation plan",
      "Escalate the issues to senior management",
      "Blame the team"
    ],
    "answers": [1],
    "explanation": "Analyzing the impact and developing a mitigation plan helps to address the unforeseen issues and minimize their impact on the project.",
    "source": "ChatGPT"
  },
  {
    "topics": ["Scenario"],
    "question": "A team member suggests a process improvement. What should the project manager do?",
    "options": [
      "Ignore the suggestion",
      "Evaluate the suggestion and its impact",
      "Implement the suggestion immediately",
      "Reject the suggestion"
    ],
    "answers": [1],
    "explanation": "Evaluating the suggestion and its impact helps to determine if it can improve the project's processes and benefit the project.",
    "source": "ChatGPT"
  },
  {
    "topics": ["Scenario"],
    "question": "A project is over budget. What should the project manager do first?",
    "options": [
      "Request additional funding",
      "Analyze the cause of the overage",
      "Reduce project scope",
      "Inform the stakeholders"
    ],
    "answers": [1],
    "explanation": "Analyzing the cause of the overage helps to identify the root cause and take appropriate corrective actions.",
    "source": "ChatGPT"
  },
  {
    "topics": ["Scenario"],
    "question": "A key stakeholder requests a change that will delay the project. What should the project manager do?",
    "options": [
      "Approve the change",
      "Reject the change",
      "Analyze the impact and discuss with the stakeholder",
      "Implement the change immediately"
    ],
    "answers": [2],
    "explanation": "Analyzing the impact and discussing with the stakeholder helps to make an informed decision about the change request.",
    "source": "ChatGPT"
  },
  {
    "topics": ["Scenario"],
    "question": "A project team is facing a conflict. What is the best way to resolve it?",
    "options": [
      "Ignore the conflict",
      "Facilitate a discussion to resolve the conflict",
      "Escalate the conflict to senior management",
      "Assign blame to one team member"
    ],
    "answers": [1],
    "explanation": "Facilitating a discussion helps to resolve the conflict and improve team collaboration.",
    "source": "ChatGPT"
  },
  {
    "topics": ["Scenario"],
    "question": "A project is nearing its deadline, but some tasks are incomplete. What should the project manager do?",
    "options": [
      "Ignore the incomplete tasks",
      "Extend the deadline",
      "Prioritize and allocate resources to complete the tasks",
      "Cancel the project"
    ],
    "answers": [2],
    "explanation": "Prioritizing and allocating resources helps to complete the tasks and meet the project deadline.",
    "source": "ChatGPT"
  },
  {
    "topics": ["Scenario"],
    "question": "A stakeholder is concerned about the project’s quality. What should the project manager do?",
    "options": [
      "Ignore the concern",
      "Schedule a meeting to address the concern",
      "Escalate the concern to senior management",
      "Blame the team"
    ],
    "answers": [1],
    "explanation": "Scheduling a meeting helps to address the stakeholder's concern about the project's quality and find a resolution.",
    "source": "ChatGPT"
  },
  {
    "topics": ["Scenario"],
    "question": "A project sponsor requests a status update. What should the project manager do?",
    "options": [
      "Ignore the request",
      "Provide a detailed status report",
      "Escalate the request to senior management",
      "Delay the response"
    ],
    "answers": [1],
    "explanation": "Providing a detailed status report helps to keep the project sponsor informed about the project's progress.",
    "source": "ChatGPT"
  },
  {
    "topics": ["Scenario"],
    "question": "A project team is facing a sudden budget cut. What should the project manager do first?",
    "options": [
      "Ignore the budget cut",
      "Analyze the impact on the project and develop a revised plan",
      "Escalate the issue to senior management",
      "Cancel the project"
    ],
    "answers": [1],
    "explanation": "Analyzing the impact on the project and developing a revised plan helps to address the budget cut and keep the project on track.",
    "source": "ChatGPT"
  }
];

export default scenarioQuestions;