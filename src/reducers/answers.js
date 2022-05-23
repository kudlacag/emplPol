import { SAVE_ANSWER } from "../types";

export default function answer(state={}, action) {
    switch(action.type) {

        case SAVE_ANSWER:
            return {
                ...state,
                [action.answer]: action.answer,
                votes: [
                    [action.qid][action.answer].votes.concat([action.authedUser]),
                ]
            } 
             
        default:
            return state;    
    }
}