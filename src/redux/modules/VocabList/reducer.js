import wordsArray from '../../../components/modules/vocab/greetings';
import { UPDATE_VOCAB_LIST } from './constants';

export const vocabListReducer = (state = wordsArray, action) => {
  switch (action.type) {
    case UPDATE_VOCAB_LIST: {
      return action.vocabList;
    }
    default: {
      return state;
    }
  }
}

export default vocabListReducer;
