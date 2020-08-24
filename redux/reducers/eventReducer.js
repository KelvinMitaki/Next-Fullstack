import { GET_MESSAGE } from "../actions/types";

const INITIAL_STATE = {
  message: null
};

const eventReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MESSAGE:
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

export default eventReducer;
