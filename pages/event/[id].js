import React, { Component } from "react";
import EventDetailedHeader from "../../components/eventDetailedHeader/EventDetailedHeader";
import Layout from "../../components/Layout";
import { Grid } from "semantic-ui-react";
import EventDetailedInfo from "../../components/eventDetailedInfo/EventDetailedInfo";

export class event extends Component {
  render() {
    return (
      <Layout title="Event">
        <div className="profile">
          <Grid>
            <Grid.Column width={10}>
              <EventDetailedHeader />
              <EventDetailedInfo />
            </Grid.Column>
          </Grid>
        </div>
        <style jsx>{`
          .profile {
            margin-top: 35vh;
          }
          @media screen and (min-width: 760px) {
            .profile {
              margin-top: 15vh;
            }
          }
        `}</style>
      </Layout>
    );
  }
}

export default event;
