import eventReducer from "./eventReducer";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import authReducer from "./authReducer";

const combinedReducer = combineReducers({
  event: eventReducer,
  auth: authReducer
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload
    };
    return nextState;
  }
  return combinedReducer(state, action);
};

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const initStore = () => store;

export const wrapper = createWrapper(initStore);
