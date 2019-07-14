import React from "react";
import Select from "../Select";

export default ({ onChange, value, lengths, disabled, ...props }) => (
  <Select
    {...props}
    name="length"
    label="Length"
    id="length"
    value={value}
    onChange={onChange}
    defaultOption="Choose a length"
    disabled={disabled}
  >
    {lengths &&
      lengths.map(length => <option key={length} value={length}>{length} mm</option>)}
  </Select>
);
