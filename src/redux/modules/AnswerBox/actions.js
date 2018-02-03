import { UPDATE_TEXT_BOX } from './constants';

export const updateTextBox = (text) => {
  return {
    type: UPDATE_TEXT_BOX,
    text,
  }
}
