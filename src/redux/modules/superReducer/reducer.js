import Immutable from 'immutable';
import {
  UPDATE_ANSWER_ATTEMPT,
  UPDATE_TEXT_BOX,
  CHANGE_MODE,
  SHOW_CONTINUE,
  SCORE_PLUS_ONE,
  TOTAL_PLUS_ONE,
  UPDATE_CURRENT_WORD,
  UPDATE_VOCAB_LIST} from './constants';

import wordsArray from '../../../components/modules/vocab/greetings';

const initialState = Immutable.fromJS({
  answerAttempt: 'none',
  answerBox: 'mate',
  mode: 'korean',
  score: 0,
  showContinue: false,
  totalWords: 0,
  currentWord: wordsArray[0],
  vocabList: wordsArray
})

const superReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ANSWER_ATTEMPT: {
      return state.mergeDeep({
        answerAttempt: action.attempt,
      });
    }
    case UPDATE_TEXT_BOX: {
      return state.mergeDeep({
        answerBox: action.text,
      });
    }
    case CHANGE_MODE: {
      return state.mergeDeep({
        mode: action.mode,
      });
    }
    case SCORE_PLUS_ONE: {
      const oldState = state.toJS();
      return state.mergeDeep({
        score: oldState.score + 1,
      });
    }
    case SHOW_CONTINUE: {
      const oldState = state.toJS();
      return state.mergeDeep({
        showContinue: !oldState.showContinue,
      })
    }
    case TOTAL_PLUS_ONE: {
      const oldState = state.toJS();
      return state.mergeDeep({
        totalWords: oldState.totalWords + 1,
      })
    }
    case UPDATE_CURRENT_WORD: {
      return state.mergeDeep({
        currentWord: action.wordObj,
      })
    }
    case UPDATE_VOCAB_LIST: {
      return state.mergeDeep({
        vocabList: action.vocabList,
      })
    }
    default: {
      return state;
    }
  }
}

export default superReducer;
