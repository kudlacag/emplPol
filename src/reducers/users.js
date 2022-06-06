import { GET_USERS, SAVE_ANSWER } from "../types";

export default function users(state = {}, action) {
  switch (action.type) {
    case SAVE_ANSWER:
      return {
        ...state,

        [action.payload.authedUser]: {
          ...state[action.payload.authedUser],
          answers: {
            ...state[action.payload.authedUser].answers,
            [action.payload.qid]: action.payload.answer,
          },
        },
      };
    case GET_USERS:
      return {
        ...state,
        ...action.users,
      };
    default:
      return {
        ...state,
      };
  }
}
