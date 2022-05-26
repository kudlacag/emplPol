import {  SAVE_ANSWER} from "../types";

export default function answers(state={}, action) {
 
    switch(action.type) {
    
        case SAVE_ANSWER:
            const { authedUser, qid, answer} = action.answers;
            const { users } = state
            // console.log(state)

            return {
                ...state,
            [qid]: answer,
            users: {
                ...users,
                authedUser:{
                    ...users[authedUser],
                    answers: {
                        ...users[authedUser].answers,
                        [qid]: answer
                    }
                }
            }
       
            }


        default:
            return state;    
    }
}