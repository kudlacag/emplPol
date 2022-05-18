import { GET_QUESTIONS, SAVE_QUESTION, SET_LOADING} from "../types";



export default function questions(state= {loading: false}, action) {
    switch(action.type) {
        case GET_QUESTIONS:
            return {
                ...state,
                ...action.questions,
            }

        case SAVE_QUESTION:
            return {
                ...state,
            [action.id]:{
                    ...state[action.id],
                 author: action.author,
                 timestamp: Date.now(),  
                  optionOne: {
                    votes: [action.id],
                    text: action.optionOne,
                  }, 
                  optionTwo: {
                    votes: action.author,
                    text: action.optionTwo
                  }
                }
            } 
            
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }    
        default:
            return state;    
    }
}