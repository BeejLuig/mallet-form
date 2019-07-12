import React from 'react';
import Quantity from './Options/Quantity';
import '@github/clipboard-copy-element';

export default ({ orderCodes=[], onClear, onRemove, onUpdate }) => {
  const codeLabel = orderCode => `${orderCode.value}x${orderCode.quantity}`;
  const codes = orderCodes.map(codeLabel);
  return (
    <div className="order-codes-container">
      <table className="order-codes">
        <tr>
          <th><h2>Order code</h2></th>
          <th><h2>Preview</h2></th>
          <th><h2>Quantity</h2></th>
        </tr>
        {
          orderCodes.map((orderCode, index) => (
            <tr key={index}>
              <td><span className="code-label">{codeLabel(orderCode)}</span></td>
              <td><img width="200" src={orderCode.src} alt="mallet preview"/></td>
              <td>
                <div className="quantity-td">
                  <Quantity hideLabel onChange={onUpdate(index)} value={orderCode.quantity} /> 
                  <button className="button" onClick={onRemove(index)}>Remove</button>
                </div>
              </td>
            </tr>
          ))
        }
      </table>
      <div className="button-group mw304 center">
        <clipboard-copy class="button clipboard-copy" value={codes.join('\n')}>Copy to clipboard</clipboard-copy>
        <button className="button" onClick={onClear}>Clear codes</button>
      </div>
    </div>
  )
}