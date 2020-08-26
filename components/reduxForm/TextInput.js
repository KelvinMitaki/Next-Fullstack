import React from "react";
import { Form, Message } from "semantic-ui-react";

const TextInput = ({ label, id, placeholder, input, meta }) => {
  console.log(meta);
  return (
    <React.Fragment>
      <Form.Field>
        <label htmlFor={id}>{label}</label>
        <input type="text" id={id} placeholder={placeholder} {...input} />
        {meta.touched && meta.error && (
          <div style={{ color: "red" }}>{meta.error}</div>
        )}
      </Form.Field>
    </React.Fragment>
  );
};

export default TextInput;
