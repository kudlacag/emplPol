import { combineReducers } from "redux";
 
import users from "./users";
import questions from "./questions";
import { loadingBarReducer } from 'react-redux-loading-bar';
import loading from "./loading";

export default combineReducers({
    users,
    questions,
    loading,
    loadingBar: loadingBarReducer,
});