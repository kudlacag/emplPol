import { GET_USERS, SAVE_ANSWER } from "../types";

export default function answers(state = {}, action) {
  switch (action.type) {
    // case SAVE_ANSWER:
    //   console.log("reducer state: ", state);

    //   return {
    //     ...state,
    //     // [action.answer.qid]: action.answer,
    //     users: {
    //       ...state.users,
    //       [action.answer.authedUser]: {
    //         ...state.users.authedUser,
    //         answers: {
    //           ...state.users.authedUser.answers,
    //           [action.answer.qid]: action.answer.answer,
    //         },
    //       },
    //     },
    //   };

    default:
      return state;
  }
}
