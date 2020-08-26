import React, { Component } from "react";
import Layout from "../components/Layout";
import { Form, Input, Button, Segment } from "semantic-ui-react";
import { reduxForm, Field } from "redux-form";
import TextInput from "../components/reduxForm/TextInput";

export class register extends Component {
  render() {
    return (
      <Layout title="register">
        <div className="segment profile">
          <Segment>
            <Form>
              <Form.Group widths="equal">
                <Field
                  name="firstName"
                  component={TextInput}
                  label="First Name"
                  id="firstName"
                  type="text"
                />
                <Field
                  name="lastName"
                  component={TextInput}
                  label="Last Name"
                  id="lastName"
                  type="text"
                />
              </Form.Group>
              <Field
                name="email"
                component={TextInput}
                label="Email"
                id="email"
                type="text"
              />
              <Field
                name="password"
                component={TextInput}
                label="Password"
                id="email"
                type="password"
              />
              <Field
                name="confirmPassword"
                component={TextInput}
                label="Confirm Password"
                id="confirmPassword"
                type="password"
              />
              <Button fluid content="Register" primary />
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

export default reduxForm({ form: "register" })(register);
