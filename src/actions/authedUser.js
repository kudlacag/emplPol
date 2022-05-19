import { GET_AUTHED_USER, LOGOUT_AUTHEDUSER } from "../types"

export function setAuthedUser(id){
    return {
        type: GET_AUTHED_USER,
        id,
    }
}

export function logoutAuthedUser(id){
    return {
        type: LOGOUT_AUTHEDUSER,
        id,
    }
}
