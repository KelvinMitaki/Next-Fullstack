import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import TextArea from "../TextArea";

class EventDetailedChatForm extends Component {
  handleCommentSubmit = formValues => {
    const {
      eventId,
      reset,
      addEventComment,
      handleCloseReplyForm,
      parentId
    } = this.props;
    addEventComment(eventId, formValues, parentId);
    reset();
    if (parentId !== 0) {
      handleCloseReplyForm();
    }
  };
  render() {
    return (
      <Form>
        <TextArea placeholder="Chat" />
        <Button
          disabled={true}
          loading={false}
          content="Add Reply"
          labelPosition="left"
          icon="edit"
          primary
        />
      </Form>
    );
  }
}
export default EventDetailedChatForm;
