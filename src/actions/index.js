
import { _getUsers, _getQuestions } from "../data/_DATA";
import { receiveUsers } from './UserAction';
import { setAuthedUser } from "./authedUser";
import { receiveQuestions } from './QuestionsActions';
import { showLoading, hideLoading } from "react-redux-loading-bar";



const AuthedUser = 'sarahedo';

export  function handleInitialData () {
    
    return async (dispatch) => {
    dispatch(showLoading())
        const { ...users } = await _getUsers();
        const { ...questions } =  await _getQuestions();
        dispatch(receiveUsers(users));
        dispatch(setAuthedUser(AuthedUser));
        dispatch(receiveQuestions(questions));
   dispatch(hideLoading());
    }
}

