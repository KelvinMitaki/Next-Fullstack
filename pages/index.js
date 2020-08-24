import React, { Component } from "react";
import { wrapper } from "../redux/reducers";
import { connect } from "react-redux";
import { getMessage } from "../redux/actions";

export class index extends Component {
  static async getInitialProps({ req, store }) {
    if (req) {
      store.dispatch(getMessage());
      return {};
    }
    return {};
  }
  render() {
    return <div>hello next</div>;
  }
}

export default wrapper.withRedux(connect(null)(index));
