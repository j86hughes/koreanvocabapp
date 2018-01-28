
const answerAttempt = (state = 'none', action) => {
  switch (action.type) {
    case 'UPDATE_ANSWER_ATTEMPT': {
      return action.attempt;
    }
  }
  return state;
}

export default answerAttempt;
