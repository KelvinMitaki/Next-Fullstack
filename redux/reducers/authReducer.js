const {
  CURRENT_USER,
  REGISTER_START,
  REGISTER_STOP,
  REGISTER_ERROR,
  LOADING_START,
  LOADING_STOP,
  LOGIN_ERROR
} = require("../actions/types");

const INITIAL_STATE = {
  user: null,
  registerLoading: false,
  registerError: null,
  loginError: null,
  loading: false
};
const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CURRENT_USER:
      return { ...state, user: action.payload };
    case REGISTER_START:
      return { ...state, registerLoading: true, registerError: null };
    case REGISTER_STOP:
      return { ...state, registerLoading: false };
    case REGISTER_ERROR:
      return { ...state, registerError: action.payload };
    case LOADING_START:
      return { ...state, loading: true, loginError: null };
    case LOADING_STOP:
      return { ...state, loading: false };
    case LOGIN_ERROR:
      return { ...state, loginError: action.payload };
    default:
      return state;
  }
};
export default authReducer;
