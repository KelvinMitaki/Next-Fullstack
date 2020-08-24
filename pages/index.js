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
    return (
      <div>
        {this.props.message ? (
          <h4>{this.props.message}</h4>
        ) : (
          <h4>hello next</h4>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    message: state.eventReducer.message
  };
};
export default wrapper.withRedux(connect(mapStateToProps)(index));
