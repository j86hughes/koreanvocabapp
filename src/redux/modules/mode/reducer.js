
const korToEngMode = (state = 'korean', action) => {
  switch (action.type) {
    case 'CHANGE_MODE': {
      console.log('MODE IS THIS ', action);
      return action.mode;
    }
  }
  return state;
}

export default korToEngMode;
