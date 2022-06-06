import { GET_AUTHED_USER, LOGOUT_AUTHEDUSER } from "../types";

// const initialState = {
//   authedUser: "sarahedo",
// };

export default function authedUser(state = null, action) {
  switch (action.type) {
    case GET_AUTHED_USER:
      return action.payload;

    case LOGOUT_AUTHEDUSER:
      return action.payload;

    default:
      return state;
  }
}
