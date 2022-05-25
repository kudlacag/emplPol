
import { SAVE_ANSWER} from "../types";



export default function answers(state= {}, action) {
    switch(action.type) {
  
        case SAVE_ANSWER:
       
            return {
                ...state,
               [action.answers]: action.answers

        } 

            
             
        default:
            return state;    
    }
}