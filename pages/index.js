import React, { Component } from "react";
import axios from "axios";

export class index extends Component {
  static async getInitialProps({ req }) {
    if (req) {
      const res = await axios.get("/api/test", {
        baseURL: "http://127.0.0.1:5000"
      });

      return { data: res.data };
    }
  }
  render() {
    console.log(this.props.data);
    return <div>hello next</div>;
  }
}

export default index;
