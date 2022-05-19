import { GET_AUTHED_USER } from "../types";

export default function authedUser(state = null, action) {
    switch(action.type) {
        case GET_AUTHED_USER:
            return action.id
        default:    
        return state;    
    }
}