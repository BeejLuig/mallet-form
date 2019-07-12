import React from 'react';
import Select from '../Select';

const oneToTen = Array.apply(null, { length: 10 })
  .map((_, i) => `${i + 1} pair${i ? 's' : ''}`);
export default ({ value, onChange, hideLabel, disabled }) => (
  <Select
    onChange={onChange}
    name="quantity"
    id="quantity" 
    value={value} 
    label={ !hideLabel && "Quantity" }
    disabled={disabled}
  >
    { oneToTen.map(n => <option key={n} value={n.replace(/pairs?/, '')}>{n}</option>) }
  </Select>
)