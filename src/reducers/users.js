import { GET_USERS, SAVE_ANSWER } from "../types";

export default function users(state = {}, action) {
  switch (action.type) {
    case SAVE_ANSWER:
      console.log("reducer state: ", state);
      console.log("authedUser: ", action.answer.authedUser);
      console.log("answers: ", state[action.answer.authedUser]);

      return {
        ...state,
        // [action.answer.qid]: action.answer,

        [action.answer.authedUser]: {
          ...state[action.answer.authedUser],
          answers: {
            ...state[action.answer.authedUser].answers,
            [action.answer.qid]: action.answer.answer,
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
