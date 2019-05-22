import React from "react";
import Select from "../Select";

export default ({ value, onChange }) => (
  <Select
    name="material"
    label="Material"
    value={value}
    id="material"
    onChange={onChange}
    defaultOption="Choose a material"
  >
    <option value="rattan">Rattan</option>
    <option value="beech">Beech</option>
    <option value="carbonFiber">Carbon Fiber</option>
  </Select>
);
