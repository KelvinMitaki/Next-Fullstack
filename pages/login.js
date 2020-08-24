import React, { Component } from "react";
import Layout from "../components/Layout";
import { Segment, Grid, Form, Button, Divider } from "semantic-ui-react";

export class login extends Component {
  render() {
    return (
      <Layout title="Login">
        <div className="segment">
          <Segment placeholder>
            <Grid columns={2} relaxed="very" stackable>
              <Grid.Column>
                <Form>
                  <Form.Input
                    icon="user"
                    iconPosition="left"
                    label="Username"
                    placeholder="Username"
                  />
                  <Form.Input
                    icon="lock"
                    iconPosition="left"
                    label="Password"
                    type="password"
                    placeholder="Your Password"
                  />

                  <Button content="Login" primary />
                </Form>
              </Grid.Column>

              <Grid.Column verticalAlign="middle">
                <Button content="Sign up" icon="signup" size="big" />
              </Grid.Column>
            </Grid>
            <div className="vertical">
              <Divider vertical>Or</Divider>
            </div>
          </Segment>
        </div>

        <style jsx>{`
          @media screen and (max-width: 768px) {
            .vertical {
              display: none;
            }
          }
          .segment {
            margin-top: 30vh;
          }
        `}</style>
      </Layout>
    );
  }
}

export default login;
