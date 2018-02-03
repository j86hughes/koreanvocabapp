import { CHANGE_MODE } from './constants';

const korToEngMode = (state = 'korean', action) => {
  switch (action.type) {
    case CHANGE_MODE: {
      return action.mode;
    }
    default: {
      return state;
    }
  }
}

export default korToEngMode;
