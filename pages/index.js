import React, { Component } from "react";
import axios from "axios";

export class index extends Component {
  static async getInitialProps({ req }) {
    if (req) {
      const res = await axios.get("/api/test", {
        baseURL: process.env.BASE_URL
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
