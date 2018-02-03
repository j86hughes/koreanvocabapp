import { UPDATE_ANSWER_ATTEMPT } from './constants';

const answerAttempt = (state = 'none', action) => {
  switch (action.type) {
    case UPDATE_ANSWER_ATTEMPT: {
      return action.attempt;
    }
    default: {
      return state;
    }
  }
}

export default answerAttempt;
