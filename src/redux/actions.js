// import * as ACTIONS from './actionTypes';

export const updateTextBox = (text) => {
  return {
    type: 'UPDATE_TEXT_BOX',
    text,
  }
}

export const updateCurrentWord = (wordObj) => {
  return {
    type: 'UPDATE_CURRENT_WORD',
    wordObj,
  }
}

export const scorePlusOne = () => {
  return {
    type: 'SCORE_PLUS_ONE',
  }
}

export const totalPlusOne = () => {
  return {
    type: 'TOTAL_PLUS_ONE',
  }
}

export const changeMode = (mode) => {
  return {
    type: 'CHANGE_MODE',
    mode,
  }
}

export const showContinue = () => {
  return {
    type: 'SHOW_CONTINUE',
  }
}
