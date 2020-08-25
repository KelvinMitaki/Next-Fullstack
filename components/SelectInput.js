import React from "react";
import { Form, Label, Select } from "semantic-ui-react";

const SelectInput = ({ multiple, options, type }) => {
  return (
    <Form.Field>
      <Select
        // value={input.value || null}
        // onChange={(e, data) => input.onChange(data.value)}
        options={options}
        multiple={multiple}
        type={type}
      />
    </Form.Field>
  );
};

export default SelectInput;
