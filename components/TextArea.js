import React from "react";
import { Form, Label } from "semantic-ui-react";
const TextArea = ({ rows, placeholder }) => {
  return (
    <Form.Field>
      <textarea placeholder={placeholder} rows={rows} />
    </Form.Field>
  );
};

export default TextArea;
