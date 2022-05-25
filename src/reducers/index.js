import { combineReducers } from "redux";
 
import users from "./users";
import questions from "./questions";
import authedUser from "./authedUser";
import answers from './answers'
import { loadingBarReducer } from 'react-redux-loading-bar';

export default combineReducers({
    users,
    authedUser,
    questions,
    answers,
    loadingBar: loadingBarReducer,
});