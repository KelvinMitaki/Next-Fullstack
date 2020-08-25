import React, { Component } from "react";
import Layout from "../components/Layout";
import { Form, Input, Button, Segment } from "semantic-ui-react";

export class register extends Component {
  render() {
    return (
      <Layout title="register">
        <div className="segment profile">
          <Segment>
            <Form>
              <Form.Group widths="equal">
                <Form.Field
                  id="form-input-control-first-name"
                  control={Input}
                  label="First name"
                  placeholder="First name"
                />
                <Form.Field
                  id="form-input-control-last-name"
                  control={Input}
                  label="Last name"
                  placeholder="Last name"
                />
              </Form.Group>
              <Form.Field
                id="form-input-control-error-email"
                control={Input}
                label="Email"
                placeholder="joe@schmoe.com"
                error={{
                  content: "Please enter a valid email address",
                  pointing: "below"
                }}
              />
              <Form.Field
                control={Input}
                label="Password"
                placeholder="Password"
              />
              <Form.Field
                control={Input}
                label="Confirm Password"
                placeholder="Confirm Your Password"
              />
              <Form.Field
                id="form-button-control-public"
                control={Button}
                content="Confirm"
                label="Label with htmlFor"
              />
            </Form>
          </Segment>
        </div>
        <style jsx>{`
          .segment {
            margin-top: 25vh;
          }
          .profile {
            margin-top: 35vh;
          }
          @media screen and (min-width: 760px) {
            .profile {
              margin-top: 20vh;
            }
          }
        `}</style>
      </Layout>
    );
  }
}

export default register;
