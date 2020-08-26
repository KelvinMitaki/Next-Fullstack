import React from "react";
import { wrapper } from "../redux/reducers";
import "semantic-ui-css/semantic.min.css";
import "../components/index.css";
import "cropperjs/dist/cropper.css";
const _app = ({ Component, pageProps }) => {
  console.log("reached");
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(_app);
