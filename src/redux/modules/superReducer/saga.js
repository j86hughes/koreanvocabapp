import { put, takeEvery, all } from 'redux-saga/effects';
import textToSpeech from '../../../components/modules/textToSpeech';
import { UPDATE_VOCAB_LIST } from './constants';

export function* sayWord(action) {
  if(action.mode === 'korean') {
    // yield textToSpeech(action.wordObj.korean[0]);
  }
};

function* watchUpdateWord() {
  yield takeEvery('UPDATE_CURRENT_WORD', sayWord);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    watchUpdateWord(),
  ])
}
