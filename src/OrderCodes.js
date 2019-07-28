import React, { useState, useEffect } from 'react';
import Quantity from './Options/Quantity';
import '@github/clipboard-copy-element';

export default ({ orderCodes=[], onClear, onRemove, onUpdate }) => {
  const [copied, setCopied] = useState(false);
  const codeLabel = orderCode => `${orderCode.value}x${orderCode.quantity}`;
  const codes = orderCodes.map(codeLabel);
  function onClipboardCopy(event) { setCopied(true) }
    useEffect(() => {
      document.addEventListener('clipboard-copy', onClipboardCopy);
      return () => {
        document.removeEventListener('clipboard-copy', onClipboardCopy);
      }
    });
    useEffect(() => {
      setCopied(false);
    }, [codes.join()])
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
        <clipboard-copy class="button clipboard-copy" value={codes.join('\n')}>{ copied ? `Copied!` : `Copy to clipboard`}</clipboard-copy>
        <button className="button" onClick={onClear}>Clear codes</button>
      </div>
    </div>
  )
}