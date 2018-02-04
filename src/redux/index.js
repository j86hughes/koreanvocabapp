import { combineReducers } from 'redux';
import AnswerBox from './modules/AnswerBox/reducer';
import { STORE_NAME as AnswerBoxName } from './modules/AnswerBox/constants';
import CurrentWord from './modules/UpdateWord/reducer';
import { STORE_NAME as UpdateWordName } from './modules/UpdateWord/constants';
import Score from './modules/Score/reducer';
import { STORE_NAME as ScoreName } from './modules/Score/constants';
import Total from './modules/TotalWords/reducer';
import { STORE_NAME as TotalName } from './modules/TotalWords/constants';
import Mode from './modules/Mode/reducer';
import { STORE_NAME as ModeName } from './modules/Mode/constants';
import ShowContinue from './modules/ShowContinue/reducer';
import { STORE_NAME as ShowContinueName } from './modules/ShowContinue/constants';
import AnswerAttempt from './modules/AnswerAttempt/reducer';
import { STORE_NAME as AnswerAttemptName } from './modules/AnswerAttempt/constants';
import VocabList from './modules/VocabList/reducer';
import { STORE_NAME as VocabListName } from './modules/VocabList/constants';

const allReducers = combineReducers({
  [AnswerBoxName]: AnswerBox,
  [UpdateWordName]: CurrentWord,
  [ScoreName]: Score,
  [TotalName]: Total,
  [ModeName]: Mode,
  [ShowContinueName]: ShowContinue,
  [AnswerAttemptName]: AnswerAttempt,
  [VocabListName]: VocabList,
})

export default allReducers;
