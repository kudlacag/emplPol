import { GET_USERS } from "../types";


export  function receiveUsers (users) {
    return {
        type: GET_USERS,
        users
    }
}

