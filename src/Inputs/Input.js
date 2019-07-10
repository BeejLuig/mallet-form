import React from 'react';

export default (props={}) => (
  <div className="field">
    <label htmlFor={props.name}>{props.label}</label>
    <input {...props} />
  </div>
);
