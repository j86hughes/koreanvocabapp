
const showContinueReducer = (state = false, action) => {
  switch(action.type) {
    case 'SHOW_CONTINUE': {
      return !state;
    }
  }
  return state;
}

export default showContinueReducer;
