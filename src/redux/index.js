import { combineReducers } from 'redux';
import answerBox from './modules/answerBox/reducer';
import currentWord from './modules/updateWord/reducer';
import score from './modules/score/reducer';
import total from './modules/totalWords/reducer';
import mode from './modules/mode/reducer';
import showContinue from './modules/showContinue/reducer';
import answerAttempt from './modules/answerAttempt/reducer';

const allReducers = combineReducers({
  answerBox,
  currentWord,
  score,
  total,
  mode,
  showContinue,
  answerAttempt,
})

export default allReducers;
