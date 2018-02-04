import wordsArray from '../../../components/modules/vocab/greetings';
import { UPDATE_CURRENT_WORD } from './constants';

export const currentWordReducer = (state = wordsArray[0], action) => {
  switch (action.type) {
    case UPDATE_CURRENT_WORD: {
      return action.wordObj;
    }
    default: {
      return state;
    }
  }
}

export default currentWordReducer;
