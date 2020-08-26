import { GET_MESSAGE, CURRENT_USER } from "./types";
import Axios from "axios";

const baseURL = process.env.BASE_URL;

export const getMessage = () => async dispatch => {
  try {
    const res = await Axios.get("/api/test", {
      baseURL
    });
    dispatch({ type: GET_MESSAGE, payload: res.data.message });
  } catch (error) {
    console.log(error.response);
  }
};

export const currentUser = () => async dispatch => {
  try {
    const res = await Axios.get("/api/current_user", { baseURL });
    dispatch({ type: CURRENT_USER, payload: res.data });
  } catch (error) {
    console.log(error.response);
  }
};
