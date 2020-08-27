import App from "next/app";
import React from "react";
import { wrapper } from "../redux/reducers";
import "semantic-ui-css/semantic.min.css";
import "../components/index.css";
import "cropperjs/dist/cropper.css";
import { currentUser } from "../redux/actions";

export class _app extends App {
  static async getInitialProps(ctx) {
    const appProps = await App.getInitialProps(ctx);
    const { store } = ctx.ctx;
    if (store) {
      store.dispatch(
        currentUser(ctx.ctx && ctx.ctx.req ? ctx.ctx.req.headers.cookie : null)
      );
    }
    return { ...appProps };
  }
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default wrapper.withRedux(_app);
