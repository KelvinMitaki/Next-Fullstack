import React from "react";
import { Form } from "semantic-ui-react";

const TextInput = ({ type, placeholder }) => {
  return (
    <Form.Field>
      <input type={type} placeholder={placeholder} />
    </Form.Field>
  );
};

export default TextInput;
