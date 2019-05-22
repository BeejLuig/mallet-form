import React from "react";
import Select from "../Select";

export default ({ onChange, value, lengths }) => (
  <Select
    name="length"
    label="Length"
    id="length"
    value={value}
    onChange={onChange}
    defaultOption="Choose a length"
  >
    {lengths &&
      lengths.map(length => <option key={length}>{length} mm</option>)}
  </Select>
);
