import React from "react";
import { wrapper } from "../redux/reducers";

const _app = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(_app);
