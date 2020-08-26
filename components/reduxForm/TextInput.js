import React from "react";
import { Form } from "semantic-ui-react";

const TextInput = ({ label, id, placeholder, input, meta, type }) => {
  return (
    <React.Fragment>
      <Form.Field>
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id} placeholder={placeholder} {...input} />
        {meta.touched && meta.error && (
          <div style={{ color: "red" }}>{meta.error}</div>
        )}
      </Form.Field>
    </React.Fragment>
  );
};

export default TextInput;
