import { UPDATE_CURRENT_WORD } from './constants';

export const updateCurrentWord = (wordObj) => {
  return {
    type: UPDATE_CURRENT_WORD,
    wordObj,
  }
}
