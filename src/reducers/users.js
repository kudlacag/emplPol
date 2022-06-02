import { GET_USERS, SAVE_ANSWER } from "../types";

export default function users(state = {}, action) {
  switch (action.type) {
    case SAVE_ANSWER:
      console.log("reducer state: ", state);
      console.log("authedUser: ", action.payload.authedUser);
      console.log("answers: ", state[action.payload.authedUser]);

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
