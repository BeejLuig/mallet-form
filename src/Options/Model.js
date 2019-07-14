import React from "react";
import Select from "../Select";

export default ({ onChange, value, models, disabled, ...props }) => (
  <Select
    { ...props }
    name="model"
    label="Model"
    id="model"
    value={value}
    onChange={onChange}
    defaultOption="Choose a strength"
    disabled={disabled}
  >
    {models &&
      models.map(model => (
        <option key={model.id} value={model.id}>
          {model.name}
        </option>
      ))}
  </Select>
);
