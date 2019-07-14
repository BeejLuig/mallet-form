import React from "react";
import Select from "../Select";

export default ({ value, onChange, ...props }) => (
  <Select
    {...props}
    name="type"
    label="Type"
    id="type"
    value={value}
    onChange={onChange}
    defaultOption="Choose a mallet type"
  >
    <option value="marimba">Marimba</option>
    <option value="vibraphone">Vibraphone</option>
  </Select>
);
