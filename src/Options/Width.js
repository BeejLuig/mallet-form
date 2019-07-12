import React from "react";
import Select from "../Select";

export default ({ value, onChange, widths, disabled }) => (
  <Select
    name="width"
    label="Width"
    id="width"
    value={value}
    onChange={onChange}
    defaultOption="Choose a width"
    disabled={disabled}
  >
    {widths && widths.map(width => <option key={width} value={width}>{width} mm</option>)}
  </Select>
);
