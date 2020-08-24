import React, { Component } from "react";
import axios from "axios";

export class index extends Component {
  static async getInitialProps({ req }) {
    if (req) {
      const res = await axios.get("/api/test", {
        baseURL: `https://next-fullstack.herokuapp.com/${process.env.PORT}`
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
