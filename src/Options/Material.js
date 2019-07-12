import React from "react";
import Select from "../Select";

export default ({ value, onChange, disabled }) => (
  <Select
    name="material"
    label="Material"
    value={value}
    id="material"
    onChange={onChange}
    defaultOption="Choose a material"
    disabled={disabled}
  >
    <option value="rattan">Rattan</option>
    <option value="beech">Beech</option>
    <option value="carbon-fiber">Carbon Fiber</option>
  </Select>
);
