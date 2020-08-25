import React from "react";
import { Form, Label } from "semantic-ui-react";
const TextArea = ({ rows, type, placeholder }) => {
  return (
    <Form.Field>
      <textarea type={type} placeholder={placeholder} rows={rows} />
    </Form.Field>
  );
};

export default TextArea;
