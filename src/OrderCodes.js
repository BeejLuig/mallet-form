import React from 'react';
import Quantity from './Options/Quantity';
import '@github/clipboard-copy-element';

export default ({ orderCodes=[], onClear, onRemove, onUpdate }) => {
  const codeLabel = orderCode => `${orderCode.value}x${orderCode.quantity}`;
  const codes = orderCodes.map(codeLabel);
  return (
    <div>
      <table className="order-codes">
        <tr>
          <th>Order code</th>
          <th>Preview</th>
          <th>Quantity</th>
        </tr>
        {
          orderCodes.map((orderCode, index) => (
            <tr key={index}>
              <td>{codeLabel(orderCode)}</td>
              <td><img width="200" src={orderCode.src} alt="mallet preview"/></td>
              <td><Quantity hideLabel onChange={onUpdate(index)} value={orderCode.quantity}/></td>
              <td><button onClick={onRemove(index)}>Remove</button></td>
            </tr>
          ))
        }
      </table>
      <clipboard-copy value={codes.join('\n')}>Copy to clipboard</clipboard-copy>
      <button onClick={onClear}>Clear codes</button>
    </div>
  )
}