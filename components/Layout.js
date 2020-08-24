import React from "react";
import { Container, Menu, Button } from "semantic-ui-react";
import Head from "next/head";

const Layout = ({ children, title }) => {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <Menu stackable inverted fixed="top">
        <Container>
          {/* <Menu.Item as="a" to="/" exact="true" header>
            <img src="/assets/logo.png" alt="logo" />
            events
          </Menu.Item> */}
          <Menu.Item as="a" to="/events" exact="true" name="Events" />
          <Menu.Item as="a" to="/activity" exact="true" name="Activity" />
          <React.Fragment>
            <Menu.Item as="a" to="/people" name="People" />
            <Menu.Item>
              <Button
                as="a"
                to="/createEvent"
                floated="right"
                positive
                inverted
                content="Create Event"
                // onClick={() => createEventNavbar()}
              />
            </Menu.Item>
          </React.Fragment>

          <Menu.Item position="right">
            <Button
              basic
              inverted
              content="Login"
              //   onClick={onSIgnInClick}
            />
            <Button
              basic
              inverted
              content="Register"
              // onClick={onRegisterClick}
              style={{ marginLeft: "0.5em" }}
            />
          </Menu.Item>
        </Container>
      </Menu>
      <Container>{children}</Container>
    </React.Fragment>
  );
};

export default Layout;
