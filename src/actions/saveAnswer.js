import { SAVE_ANSWER } from "../types";
import { _saveQuestionAnswer } from "../data/_DATA";
// import authedUser from "../reducers/authedUser";

const addAnswer = (answer) => {
  console.log("addAnswer: ", answer);
  return {
    type: SAVE_ANSWER,
    payload: answer,
  };
};

let loading = true;
const stop = () => {
  return (loading = false);
};
export const handleAddanswer = (authedUser, qid, answer) => {
  loading = true;
  return async (dispatch) => {
    // console.log(authedUser, qid, answer);
    const isResolved = await _saveQuestionAnswer({
      authedUser,
      qid,
      answer,
    });
    // console.log("isResolved :", isResolved);
    if (isResolved) {
      dispatch(addAnswer({ authedUser, qid, answer }));
      stop();
    }
  };
};
