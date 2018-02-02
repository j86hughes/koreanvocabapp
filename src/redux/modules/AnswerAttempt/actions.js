import { UPDATE_ANSWER_ATTEMPT } from './constants';

export const updateAnswerAttempt = (attempt) => {
  return {
    type: UPDATE_ANSWER_ATTEMPT,
    attempt,
  }
}
