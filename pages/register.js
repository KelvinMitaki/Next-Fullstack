import React, { Component } from "react";
import Layout from "../components/Layout";
import { Form, Button, Segment } from "semantic-ui-react";
import { reduxForm, Field } from "redux-form";
import TextInput from "../components/reduxForm/TextInput";
import validator from "validator";
import { connect } from "react-redux";
import { getMessage, registerUser } from "../redux/actions";

export class register extends Component {
  render() {
    return (
      <Layout title="register">
        <div className="segment profile">
          <Segment>
            <Form
              onSubmit={this.props.handleSubmit(formValues =>
                this.props.registerUser(formValues)
              )}
            >
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
                id="password"
                type="password"
              />
              <Field
                name="confirmPassword"
                component={TextInput}
                label="Confirm Password"
                id="confirmPassword"
                type="password"
              />
              <Button
                fluid
                content="Register"
                primary
                disabled={this.props.invalid || this.props.registerLoading}
                loading={this.props.registerLoading}
              />
              <h5 style={{ color: "red" }}>{this.props.registerError}</h5>
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
const validate = formValues => {
  const errors = {};
  if (
    !formValues.firstName ||
    (formValues.firstName && formValues.firstName.trim() === "")
  ) {
    errors.firstName = "Please enter your first name";
  }
  if (
    !formValues.lastName ||
    (formValues.lastName && formValues.lastName.trim() === "")
  ) {
    errors.lastName = "Please enter your last name";
  }
  if (
    !formValues.email ||
    (formValues.email && !validator.isEmail(formValues.email))
  ) {
    errors.email = "Please enter a valid email";
  }
  if (
    !formValues.password ||
    (formValues.password && formValues.password.trim().length < 6)
  ) {
    errors.password = "Password must be at least six characters";
  }
  if (formValues.password !== formValues.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
};

const mapStateToProps = state => {
  return {
    registerLoading: state.auth.registerLoading,
    registerError: state.auth.registerError
  };
};
export default reduxForm({ form: "register", validate })(
  connect(mapStateToProps, { registerUser })(register)
);
