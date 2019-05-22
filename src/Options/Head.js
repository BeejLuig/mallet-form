import React from "react";
import Select from "../Select";

export default ({ onChange, value, heads }) => (
  <Select
    name="head"
    label="Head"
    id="head"
    value={value}
    onChange={onChange}
    defaultOption="Choose a strength"
  >
    {heads &&
      heads.map(head => (
        <option key={head.id} value={head.id}>
          {head.name}
        </option>
      ))}
  </Select>
);
