import { SAVE_ANSWER } from "../types";
import { _saveQuestionAnswer } from '../data/_DATA';
// import authedUser from "../reducers/authedUser";



const addAnswer =  (answers) => {
    return {
        type: SAVE_ANSWER,
        answers,
    }
}

let loading = true;
const stop = () => {
    return loading= false
}
export const handleAddanswer = (authedUser, qid, answer) => {
   loading= true;
    return async (dispatch) => {
    
        console.log(authedUser, qid, answer)
      const answers = await  _saveQuestionAnswer({
          authedUser,
          qid,
          answer
        });
//   console.log(answers)
   const answerObj = {authedUser, qid, answer};
     dispatch(addAnswer(answerObj));
     stop();
    } 
  } 