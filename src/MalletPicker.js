import React, { Component } from "react";
import { initialState } from "./constants/state";
import OrderCodes from './OrderCodes';
import * as Options from "./Options";
import { getMalletModels, getMalletSizes } from "./helpers";

const MalletPreview = ({ model, material }) => {
  if (!(model && material)) return null;
  const malletSrc = require(`./img/mallets/${material}_${model}.png`);
  return (
    <div className="mallet-preview">
      <img src={malletSrc} alt={`${material.replace('-', ' ')} ${model} mallet`}/>
    </div>
  );
};

export default class MalletPicker extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  componentDidUpdate() {
    console.log("State:", this.state);
  }

  onSubmit = event => {
    event.preventDefault();
    const { type, material, width, length, model, weight, quantity } = event.target;
    // alert(`Your selections: 
    //   Type: ${type.value}
    //   Material: ${material.value}
    //   Width: ${width.value},
    //   Length: ${length.value},
    //   Model: ${model.value},
    //   Weight: ${weight.value},
    //   Quantity: ${quantity.value}
    // `);

    /**
     * Vibraphone
     * Rattan
     * 9mm
     * 41cm
     * Medium
     * V1
     * 2 pairs
     */
    const orderCode = {
      value: [type, material, width, length, weight, model]
      .map(input => input.value)
      .join('/'),
      quantity: quantity.value,
      src: require(`./img/mallets/${material.value}_${model.value}.png`)
    }

      
    this.setState(state => ({
      ...initialState,
      orderCodes: [
        ...state.orderCodes,
        orderCode
      ]
    }));
  };

  onReset = () => {
    this.setState(state => ({
      ...initialState,
      orderCodes: state.orderCodes
    }));
  }

  onChange = name => event => {
    const { value } = event.target;
    let newState = {
      error: null,
      [name]: value,
    };

    if (name === 'type') {
      const { default: defaultValues } = require(`./constants/${value}`);
      newState = {
        error: null,
        ...(defaultValues)
      }
    }

    this.setState(newState);
  };

  removeCode = index => () => {
    this.setState(state => ({
      ...state,
      orderCodes: [
        ...state.orderCodes.slice(0, index), 
        ...state.orderCodes.slice(index + 1)
      ],
    }));
  }

  clearCodes = () => this.setState(state => ({ ...state, orderCodes: [] }))

  updateCode = index => event => {
    const quantity = event.target.value;
    this.setState(state => {
      const newOrderCode = { ...state.orderCodes[index], quantity };
      return {
        ...state, 
        orderCodes: [
          ...state.orderCodes.slice(0, index), 
          newOrderCode,
          ...state.orderCodes.slice(index + 1)
        ] 
      }
    });
  }

  render() {
    const { onSubmit, onChange, onReset } = this;
    const {
      error,
      type,
      material,
      width,
      length,
      model,
      weight,
      quantity,
      orderCodes
    } = this.state;
    const { widths, lengths } = getMalletSizes({ type, material });
    const { models, weights } = getMalletModels({ type });

    return (
      <>
        <form id="mallet" onSubmit={onSubmit}>
          {error && <p className="errorMessage">{error.message}</p>}
          <Options.Type onChange={onChange("type")} value={type} />
          {
            type && (
              <>
              <hr /> 
              <h2>Head</h2>
                <Options.Weight
                  onChange={onChange("weight")}
                  weights={weights}
                  value={weight}
                />
                <Options.Model
                  value={model}
                  onChange={onChange("model")}
                  models={models}
                />
                <hr />             
                <h2>Handle</h2>
                <Options.Material onChange={onChange("material")} value={material} />
                <Options.Width
                  onChange={onChange("width")}
                  value={width}
                  widths={widths}
                />
                <Options.Length
                  onChange={onChange("length")}
                  lengths={lengths}
                  value={length}
                />
                <hr />
                <Options.Quantity value={quantity} onChange={onChange('quantity')} />
              </>
            )
          }
          <input type="submit" />
          <input type="reset" onClick={onReset} />
        </form>
        { material && model && (
          <>          
            <h2>Preview</h2>
            <MalletPreview material={material} model={model} />
          </>
        )}
        { orderCodes.length ? (
          <OrderCodes
            orderCodes={orderCodes}
            onRemove={this.removeCode}
            onUpdate={this.updateCode}
            onClear={this.clearCodes} 
          />
        ) : null}
      </>
    );
  }
}
