import agileQuestions from './agile.json';
import waterfallQuestions from './waterfall.json';
import scenarioQuestions from './scenario.json';

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