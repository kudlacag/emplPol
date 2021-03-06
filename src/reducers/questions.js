import { GET_QUESTIONS, SAVE_QUESTION, SAVE_ANSWER } from "../types";

export default function questions(state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };

    case SAVE_ANSWER:
      const { qid, authedUser, answer } = action.payload;

      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser]),
          },
        },
      };

    case SAVE_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };

    default:
      return state;
  }
}
