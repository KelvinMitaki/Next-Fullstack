import {
  GET_MESSAGE,
  CURRENT_USER,
  REGISTER_START,
  REGISTER_STOP,
  REGISTER_ERROR,
  LOADING_START,
  LOADING_STOP,
  LOGIN_ERROR
} from "./types";
import Axios from "axios";
import Router from "next/router";
import fetch from "isomorphic-unfetch";

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

export const currentUser = cookie => async dispatch => {
  try {
    const res = await fetch(
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/api/current_user"
        : "https://next-fullstack.herokuapp.com/api/current_user",
      {
        headers: { cookie }
      }
    );
    const data = await res.json();
    dispatch({ type: CURRENT_USER, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const registerUser = formValues => async dispatch => {
  try {
    dispatch({ type: REGISTER_START });
    await Axios.post("/api/register", formValues, { baseURL });
    Router.push("/login");
    dispatch({ type: REGISTER_STOP });
  } catch (error) {
    console.log(error.response);
    dispatch({ type: REGISTER_STOP });
    dispatch({ type: REGISTER_ERROR, payload: error.response.data.message });
  }
};

export const loginUser = formValues => async dispatch => {
  try {
    dispatch({ type: LOADING_START });
    await Axios.post("/api/login", formValues, { baseURL });
    Router.push("/");
    dispatch({ type: LOADING_STOP });
  } catch (error) {
    console.log(error.response);
    dispatch({ type: LOADING_STOP });
    dispatch({ type: LOGIN_ERROR, payload: error.response.data.message });
  }
};

export const basicProfile = formValues => async dispatch => {
  try {
    dispatch({ type: LOADING_START });
    await Axios.post("/api/update/user", formValues, { baseURL });
    Router.push("/profile");
    dispatch({ type: LOADING_STOP });
  } catch (error) {
    console.log(error.response);
  }
};
