import wordsArray from '../../../components/modules/greetings';

export const currentWordReducer = (state = wordsArray[2], action) => {
  switch (action.type) {
    case 'UPDATE_CURRENT_WORD': {
      return action.wordObj;
    }
    default: {
      return state;
    }
  }
}

export default currentWordReducer;
