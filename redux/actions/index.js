const { GET_MESSAGE } = require("./types");
const { default: Axios } = require("axios");

export const getMessage = () => async dispatch => {
  try {
    const res = await Axios.get("/api/test", {
      baseURL: process.env.BASE_URL
    });
    dispatch({ type: GET_MESSAGE, payload: res.data });
  } catch (error) {
    console.log(error.response);
  }
};
