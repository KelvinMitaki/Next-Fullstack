import React, { Component } from "react";
import Layout from "../components/Layout";
import { Segment, Grid, Form, Button, Divider } from "semantic-ui-react";
import router from "next/router";

export class login extends Component {
  render() {
    return (
      <Layout title="Login">
        <div className="segment profile">
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
                <Button
                  content="Sign up"
                  icon="signup"
                  onClick={() => router.push("/register")}
                  size="big"
                />
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
          .profile {
            margin-top: 35vh;
          }
          @media screen and (min-width: 768px) {
            .profile {
              margin-top: 25vh;
            }
          }
        `}</style>
      </Layout>
    );
  }
}

export default login;
