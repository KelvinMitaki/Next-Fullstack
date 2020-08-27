import React from "react";

const RadioButton = ({ input, label, radioName, radioValue }) => {
  return (
    <div>
      <input
        type="radio"
        name={radioName}
        style={{ marginLeft: "5px" }}
        onChange={input.onChange}
        value={radioValue}
      />
      <label> {label} </label>
    </div>
  );
};

export default RadioButton;
