
import { _getUsers, _getQuestions } from "../data/_DATA";
import { receiveUsers } from './UserAction';
import { receiveQuestions } from './QuestionsActions';
import { showLoading, hideLoading } from "react-redux-loading-bar";




export  function handleInitialData () {
    
    return async (dispatch) => {
    dispatch(showLoading())
        const { ...users } = await _getUsers();
        const { ...questions } =  await _getQuestions();
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
   dispatch(hideLoading());
    }
}

