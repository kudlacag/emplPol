import { SAVE_QUESTION } from '../types';
import { _saveQuestion} from '../data/_DATA'

const addQuestion = (question) => {
    return {
        type: SAVE_QUESTION,
        question,
    }
}


export const handleAddQuestion = (id, author, optionOneText, optionTwoText) => {
  return async (dispatch) => {
      const question = await  _saveQuestion({
          id,
          author,
          optionOneText,
          optionTwoText,
          
        
      });

      dispatch(addQuestion(question));

  } 
}