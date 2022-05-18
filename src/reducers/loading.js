import { SET_LOADING } from "../types";


export default function loading(state= {loading: false}, action) {
    switch(action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;    
    }
}