import React from "react";

export default ({
  name,
  label,
  value,
  onChange,
  id,
  children,
  defaultOption
}) => (
  <div className="field">
    <label htmlFor={name}>{label}</label>
    <select id={id} name={name} value={value} onChange={onChange}>
      { defaultOption && <option value="" hidden>--{defaultOption}--</option> }
      {children}
    </select>
  </div>
);
