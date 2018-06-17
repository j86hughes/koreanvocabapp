import Immutable from 'immutable';
import {
  UPDATE_ANSWER_ATTEMPT,
  UPDATE_TEXT_BOX,
  CHANGE_MODE,
  SHOW_CONTINUE,
  SCORE_PLUS_ONE,
  TOTAL_PLUS_ONE,
  UPDATE_CURRENT_WORD,
  UPDATE_VOCAB_LIST,
  CLEAR_VOCAB_LIST,
  UPDATE_CORRECT_WORD_LIST,
  UPDATE_INCORRECT_WORD_LIST,
  UPDATE_MULTI_LIST,
  RESET_LISTS,
} from './constants';

const initialState = Immutable.fromJS({
  answerAttempt: 'none',
  answerBox: '',
  mode: 'korean',
  score: 0,
  showContinue: false,
  totalWords: 0,
  currentWord: {},
  vocabList: [],
  correctWords: [],
  incorrectWords: [],
  multiList: [],
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
      return state.merge({
        currentWord: action.wordObj,
      })
    }
    case CLEAR_VOCAB_LIST: {
      return state.removeIn(state.vocabList)
    }
    case UPDATE_VOCAB_LIST: {
      return state.merge({
        vocabList: action.vocabList,
      })
    }
    case UPDATE_CORRECT_WORD_LIST: {
      const array = state.getIn(["correctWords"]);
      return state.updateIn(["correctWords", array.size], () => action.word);
    }
    case UPDATE_INCORRECT_WORD_LIST: {
      const array = state.getIn(["incorrectWords"]);
      return state.updateIn(["incorrectWords", array.size], () => action.word);
    }
    case UPDATE_MULTI_LIST: {
      return state.mergeDeep({
        multiList: action.list,
      });
    }
    case RESET_LISTS: {
      return state.merge({
        correctWords: [],
        incorrectWords: [],
        vocabList: [],
        multiList: [],
        score: 0,
        totalWords: 0,
        answerBox: '',
        answerAttempt: 'none',
      })
    }
    default: {
      return state;
    }
  }
}

export default superReducer;
