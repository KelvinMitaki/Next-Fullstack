import React, { Component } from "react";
import TextInput from "../../components/TextInput";
import RadioInput from "../../components/RadioInput";
import { Button, Segment, Header, Form, Divider } from "semantic-ui-react";
import Layout from "../../components/Layout";

export class basics extends Component {
  render() {
    return (
      <Layout title="Basics">
        <div className="profile">
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
