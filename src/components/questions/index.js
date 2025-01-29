import agileQuestions from './agile';
import waterfallQuestions from './waterfall';
import scenarioQuestions from './scenario';

const questions = {
  agile: agileQuestions,
  waterfall: waterfallQuestions,
  scenario: scenarioQuestions,
  full: [
    ...agileQuestions,
    ...waterfallQuestions,
    ...scenarioQuestions,
  ],
};

export default questions;
