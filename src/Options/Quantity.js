import React from 'react';
import Select from '../Select';

const oneToTen = Array.apply(null, { length: 10 })
  .map((_, i) => i + 1);
export default ({ value, onChange, hideLabel }) => (
  <Select
    onChange={onChange}
    name="quantity"
    id="quantity" 
    value={value} 
    label={ !hideLabel && "Quantity (pairs)" }
  >
    { oneToTen.map(n => <option key={n} value={n}>{n}</option>) }
  </Select>
)