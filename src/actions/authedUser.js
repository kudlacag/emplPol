import { GET_AUTHED_USER, LOGOUT_AUTHEDUSER } from "../types";

export function setAuthedUser(id) {
  return {
    type: GET_AUTHED_USER,
    payload: id,
  };
}

export function logoutAuthedUser() {
  return {
    type: LOGOUT_AUTHEDUSER,
    payload: null,
  };
}
