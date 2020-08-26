import React from "react";
import { Form, Message } from "semantic-ui-react";

const TextInput = ({ label, id, placeholder, input, meta }) => {
  return (
    <React.Fragment>
      <Form.Field>
        <label htmlFor={id}>{label}</label>
        <input type="text" id={id} placeholder={placeholder} {...input} />
        <div style={{ color: "red" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </div>
      </Form.Field>
    </React.Fragment>
  );
};

export default TextInput;
