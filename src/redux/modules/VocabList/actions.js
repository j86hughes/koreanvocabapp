import { UPDATE_VOCAB_LIST } from './constants';

const updateVocabList = (vocabList) => {
  return {
    type: UPDATE_VOCAB_LIST,
    vocabList,
  }
}
