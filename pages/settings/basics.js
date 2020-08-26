import React, { Component } from "react";
import RadioInput from "../../components/RadioInput";
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

export class basics extends Component {
  render() {
    return (
      <Layout title="Basics">
        <div className="profile">
          <Grid stackable>
            <Grid.Column width={12}>
              <Segment>
                <Header dividing size="large" content="Basics" />
                <Form>
                  <TextInput placeholder="Known As" type="text" />
                  <Form.Group inline>
                    <label>Gender: </label>
                    <RadioInput type="radio" label="Male" />
                    <RadioInput type="radio" label="Female" />
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

                  <TextInput type="text" placeholder="Home Town" />
                  <Divider />
                  <Button
                    disabled={true}
                    size="large"
                    positive
                    content="Update Profile"
                  />
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

export default basics;
