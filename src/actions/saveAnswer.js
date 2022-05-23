import { SAVE_ANSWER } from "../types";
import { _saveQuestionAnswer } from '../data/_DATA';


export  function addAnswer (answer) {
    return {
        type: SAVE_ANSWER,
        answer,
    }
}


export const handleAddanswer = (authedUser, qid, answer) => {
    return async (dispatch) => {
      const answers = await  _saveQuestionAnswer({
            authedUser,
            qid,
           answer,
            
          
        });
  
     dispatch(addAnswer(answers));
  
    } 
  }