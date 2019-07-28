import React from 'react';
import Quantity from './Options/Quantity';
import '@github/clipboard-copy-element';

export default ({ orderCodes=[], onClear, onRemove, onUpdate }) => {
  const codeLabel = orderCode => `${orderCode.value}x${orderCode.quantity}`;
  const codes = orderCodes.map(codeLabel);
  return (
    <div className="order-codes-container">
      <div className="order-codes">
        <h2 className="order-heading center">Order</h2>
        <div className="order-codes__wrapper">
        {
          orderCodes.map((orderCode, index) => (
            <div className="order-codes__row" key={index}>
              <div className="mini-preview" ><img src={orderCode.src} alt="mallet preview"/></div>
              <div>
                <div className="quantity-data">
                  <Quantity hideLabel onChange={onUpdate(index)} value={orderCode.quantity} /> 
                  <button className="button" onClick={onRemove(index)}>Remove</button>
                </div>
              </div>
            </div>
          ))
        }
        </div>
      </div>
      <div className="button-group center">
        <clipboard-copy class="button clipboard-copy" value={codes.join('\n')}>Copy to clipboard</clipboard-copy>
        <button className="button" onClick={onClear}>Clear codes</button>
      </div>
    </div>
  )
}