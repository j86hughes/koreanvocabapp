import { TOTAL_PLUS_ONE } from './constants';

export const totalReducer = (state = 0, action) => {
  switch (action.type) {
    case TOTAL_PLUS_ONE: {
      const newState = state + 1;
      return newState;
    }
  }
  return state;
}

export default totalReducer;
