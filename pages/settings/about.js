import React, { Component } from "react";
import Layout from "../../components/Layout";
import RadioInput from "../../components/RadioInput";
import TextArea from "../../components/TextArea";
import SelectInput from "../../components/SelectInput";
import TextInput from "../../components/TextInput";
import { Segment, Header, Form, Divider, Button } from "semantic-ui-react";

const interests = [
  { key: "drinks", text: "Drinks", value: "drinks" },
  { key: "culture", text: "Culture", value: "culture" },
  { key: "film", text: "Film", value: "film" },
  { key: "food", text: "Food", value: "food" },
  { key: "music", text: "Music", value: "music" },
  { key: "travel", text: "Travel", value: "travel" }
];
export class about extends Component {
  render() {
    return (
      <Layout title="About">
        <div className="profile">
          <Segment>
            <Header dividing size="large" content="About Me" />
            <p>Complete your profile to get the most out of this site</p>
            <Form>
              <Form.Group inline>
                <label>Tell us your status: </label>
                <RadioInput label="Single" type="radio" />
                <RadioInput label="Relationship" type="radio" />
                <RadioInput label="Married" type="radio" />
              </Form.Group>
              <Divider />
              <label>Tell us about yourself</label>
              <TextArea placeholder="About Me" />
              <SelectInput options={interests} multiple={true} />
              <TextInput placeholder="Occupation" type="text" />
              <TextInput placeholder="Country of Origin" type="text" />

              <Divider />
              <Button disabled size="large" positive content="Update Profile" />
            </Form>
          </Segment>
        </div>
        <style jsx>{`
          .profile {
            margin-top: 35vh;
          }
          @media screen and (min-width: 760px) {
            .profile {
              margin-top: 10vh;
            }
          }
        `}</style>
      </Layout>
    );
  }
}

export default about;
