import React from "react";
import Select from "../Select";

export default ({ value, onChange, widths }) => (
  <Select
    name="width"
    label="Width"
    id="width"
    value={value}
    onChange={onChange}
    defaultOption="Choose a width"
  >
    {widths && widths.map(width => <option key={width} value={width}>{width} mm</option>)}
  </Select>
);
