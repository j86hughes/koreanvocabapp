
export const answerBoxReducer = (state = 'mate', action) => {
  switch (action.type) {
    case 'UPDATE_TEXT_BOX': {
      return action.text;
    }
  }
  return state;
}

export default answerBoxReducer;
