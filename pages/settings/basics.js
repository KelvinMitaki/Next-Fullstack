import React, { Component } from "react";
import {
  Button,
  Segment,
  Header,
  Form,
  Divider,
  Grid
} from "semantic-ui-react";
import Layout from "../../components/Layout";
import SettingsNav from "../../components/SettingsNav";
import TextInput from "../../components/reduxForm/TextInput";
import { reduxForm, Field } from "redux-form";
import RadioButton from "../../components/reduxForm/RadioButton";

export class basics extends Component {
  state = {
    changed: false
  };
  render() {
    return (
      <Layout title="Basics">
        <div className="profile">
          <Grid stackable>
            <Grid.Column width={12}>
              <Segment>
                <Header dividing size="large" content="Basics" />
                <Form>
                  <Field
                    component={TextInput}
                    type="text"
                    name="knownAs"
                    placeholder="Known As"
                    onChange={() =>
                      !this.state.changed && this.setState({ changed: true })
                    }
                  />
                  <Form.Group inline>
                    <label>Gender: </label>
                    <Field
                      component={RadioButton}
                      radioName="gender"
                      radioValue="male"
                      label="Male"
                      value="male"
                      name="gender"
                      onChange={() =>
                        !this.state.changed && this.setState({ changed: true })
                      }
                    />
                    <Field
                      component={RadioButton}
                      radioName="gender"
                      radioValue="female"
                      label="Female"
                      value="female"
                      name="gender"
                      onChange={() =>
                        !this.state.changed && this.setState({ changed: true })
                      }
                    />
                  </Form.Group>
                  {/* <Field
            width={8}
            name="dateOfBirth"
            component={DateInput}
            placeholder="Date of Birth"
            showYearDropdown={true}
            showMonthDropdown={true}
            dropdownMode="select"
            maxDate={addYears(new Date(), -18)}
          /> */}
                  <Field
                    component={TextInput}
                    name="homeTown"
                    placeholder="Home Town"
                    type="text"
                    onChange={() =>
                      !this.state.changed && this.setState({ changed: true })
                    }
                  />
                  <Divider />
                  <Button
                    disabled={!this.state.changed || this.props.pristine}
                    size="large"
                    positive
                    content="Update Profile"
                  />
                  {/* {console.log(this.props)} */}
                </Form>
              </Segment>
            </Grid.Column>
            <Grid.Column width={4}>
              <SettingsNav />
            </Grid.Column>
          </Grid>
        </div>
        <style jsx>{`
          .profile {
            margin-top: 35vh;
          }
          @media screen and (min-width: 760px) {
            .profile {
              margin-top: 25vh;
            }
          }
        `}</style>
      </Layout>
    );
  }
}

export default reduxForm({ form: "basics" })(basics);
