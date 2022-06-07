import { GET_QUESTIONS } from "../types";

export function receiveQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions,
  };
}
