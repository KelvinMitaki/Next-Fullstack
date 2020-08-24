import React from "react";
import { Container } from "semantic-ui-react";
import Head from "next/head";

const Layout = ({ children, title }) => {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <Container>{children}</Container>
    </React.Fragment>
  );
};

export default Layout;
