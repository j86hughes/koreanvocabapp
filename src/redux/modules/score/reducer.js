
export const scoreReducer = (state = 0, action) => {
  switch (action.type) {
    case 'SCORE_PLUS_ONE': {
      const newSate = state + 1;
      return newSate;
    }
  }
  return state;
}

export default scoreReducer;
