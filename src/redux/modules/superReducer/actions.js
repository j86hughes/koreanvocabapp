import {
  UPDATE_ANSWER_ATTEMPT,
  UPDATE_TEXT_BOX,
  CHANGE_MODE,
  SCORE_PLUS_ONE,
  SHOW_CONTINUE,
  TOTAL_PLUS_ONE,
  UPDATE_CURRENT_WORD,
  UPDATE_VOCAB_LIST,
  CLEAR_VOCAB_LIST,
  UPDATE_CORRECT_WORD_LIST,
  UPDATE_INCORRECT_WORD_LIST,
} from './constants';


export const updateAnswerAttempt = (attempt) => {
  return {
    type: UPDATE_ANSWER_ATTEMPT,
    attempt,
  }
}

export const updateTextBox = (text) => {
  return {
    type: UPDATE_TEXT_BOX,
    text,
  }
}

export const changeMode = (mode) => {
  return {
    type: CHANGE_MODE,
    mode,
  }
}

export const scorePlusOne = () => {
  return {
    type: SCORE_PLUS_ONE,
  }
}

export const toggleContinue = () => {
  return {
    type: SHOW_CONTINUE,
  }
}

export const totalPlusOne = () => {
  return {
    type: TOTAL_PLUS_ONE,
  }
}

export const updateCurrentWord = (wordObj) => {
  return {
    type: UPDATE_CURRENT_WORD,
    wordObj,
  }
}

export const updateVocabList = (vocabList) => {
  return {
    type: UPDATE_VOCAB_LIST,
    vocabList,
  }
}

export const clearVocabList = () => {
  return {
    type: CLEAR_VOCAB_LIST,
  }
}

export const updateCorrectWordList = (word) => {
  return {
    type: UPDATE_CORRECT_WORD_LIST,
    word,
  }
}

export const updateIncorrectWordList = (word) => {
  return {
    type: UPDATE_INCORRECT_WORD_LIST,
    word,
  }
}
