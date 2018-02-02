import { CHANGE_MODE } from './constants';

export const changeMode = (mode) => {
  return {
    type: CHANGE_MODE,
    mode,
  }
}
