import React from "react";
import Select from "../Select";

export default ({ value, onChange, weights }) => (
  <Select
    name="weight"
    label="Weight"
    id="weight"
    onChange={onChange}
    value={value}
    defaultOption="Choose a weight"
  >
    {weights &&
      weights.map(weight => (
        <option key={weight.id} value={weight.id}>
          {weight.name}
        </option>
      ))}
  </Select>
);
