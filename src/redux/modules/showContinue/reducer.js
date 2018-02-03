import { SHOW_CONTINUE } from './constants';

const showContinueReducer = (state = false, action) => {
  switch(action.type) {
    case SHOW_CONTINUE: {
      return !state;
    }
    default: {
      return state;
    }
  }
}

export default showContinueReducer;
