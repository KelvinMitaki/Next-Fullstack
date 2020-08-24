import eventReducer from "./eventReducer";
import { combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";

const combinedReducer = combineReducers({
  eventReducer: eventReducer
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

const store = createStore(reducer, composeWithDevTools(thunk));

const initStore = () => store;

export const wrapper = createWrapper(initStore);
