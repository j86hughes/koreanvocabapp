
export const totalReducer = (state = 0, action) => {
  switch (action.type) {
    case 'TOTAL_PLUS_ONE': {
      // let newState = state + 1;
      return state + 1;
      break;
    }
  }
  return state;
}

export default totalReducer;
