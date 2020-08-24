import React from "react";
import { wrapper } from "../redux/reducers";
import "semantic-ui-css/semantic.min.css";

const _app = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(_app);
