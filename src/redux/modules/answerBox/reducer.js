import { UPDATE_TEXT_BOX } from './constants';

export const answerBoxReducer = (state = 'mate', action) => {
  switch (action.type) {
    case UPDATE_TEXT_BOX: {
      return action.text;
    }
    default: {
      return state;
    }
  }
}

export default answerBoxReducer;
