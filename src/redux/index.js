import { combineReducers } from 'redux';
import answerBox from './modules/answerBox/reducer';
import currentWord from './modules/updateWord/reducer';
import score from './modules/score/reducer.js';
import total from './modules/totalWords/reducer.js';
import mode from './modules/mode/reducer.js';
import showContinue from './modules/showContinue/reducer.js';

const allReducers = combineReducers({
  answerBox,
  currentWord,
  score,
  total,
  mode,
  showContinue,
})

export default allReducers;
