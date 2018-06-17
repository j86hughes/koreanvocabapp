import * as CONSTANTS from '../constants';

const isCorrectAnswer = (currentWord, answerBox, mode) => {
  if (
    currentWord.english.indexOf(answerBox.trim()) > -1 &&
    mode === CONSTANTS.KOREAN
  ) {
    return true;
  }
  if (
    currentWord.korean.indexOf(answerBox.trim()) > -1 &&
    mode === CONSTANTS.ENGLISH
  ) {
    return true;
  }
  return false;
}

export default isCorrectAnswer;
