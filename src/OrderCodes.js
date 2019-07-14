import React from 'react';
import Quantity from './Options/Quantity';
import '@github/clipboard-copy-element';

export default ({ orderCodes=[], onClear, onRemove, onUpdate }) => {
  const codeLabel = orderCode => `${orderCode.value}x${orderCode.quantity}`;
  const codes = orderCodes.map(codeLabel);
  return (
    <div className="order-codes-container">
      <table className="order-codes">
        <thead>
          <tr>
            <th><h2>Preview</h2></th>
            <th><h2>Quantity</h2></th>
          </tr>
        </thead>
        <tbody>
        {
          orderCodes.map((orderCode, index) => (
            <tr key={index}>
              <td className="mini-preview" ><img src={orderCode.src} alt="mallet preview"/></td>
              <td>
                <div className="quantity-td">
                  <Quantity hideLabel onChange={onUpdate(index)} value={orderCode.quantity} /> 
                  <button className="button" onClick={onRemove(index)}>Remove</button>
                </div>
              </td>
            </tr>
          ))
        }
        </tbody>
      </table>
      <div className="button-group center">
        <clipboard-copy class="button clipboard-copy" value={codes.join('\n')}>Copy to clipboard</clipboard-copy>
        <button className="button" onClick={onClear}>Clear codes</button>
      </div>
    </div>
  )
}