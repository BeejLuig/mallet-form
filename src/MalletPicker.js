import React, { Component } from "react";
import { initialState } from "./constants/state";
import * as Options from "./Options";
import { getMalletHeads, getMalletSizes } from "./helpers";

const MalletPreview = ({ head, shaft }) => {
  console.log(head, shaft)
  if (!(head && shaft)) return null;
  const malletSrc = require(`./img/mallets/${shaft}_${head}.png`);
  return (
    <div className="mallet-preview">
      <h2>
        <span class="capitalize">{shaft.replace('-', ' ')}</span>
        {' '}
        <span class="uppercase">{head}</span>
      </h2>
      <img src={malletSrc} alt={`${shaft.replace('-', ' ')} ${head} mallet`}/>
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

  handleSubmit = event => {
    event.preventDefault();
    const { type, material, width, length, head, weight } = event.target;
    alert(`Your selections: 
      Type: ${type.value}
      Material: ${material.value}
      Width: ${width.value},
      Length: ${length.value},
      Head: ${head.value},
      Weight: ${weight.value}
    `);
    this.setState(initialState);
  };

  onChange = name => event => {
    const { value } = event.target;
    let newState = {
      error: null,
      [name]: value,
    };

    this.setState(newState);
  };
  render() {
    const { handleSubmit, onChange } = this;
    const {
      error,
      type,
      material,
      input,
      width,
      length,
      head,
      weight,
    } = this.state;
    const { widths, lengths } = getMalletSizes({ type, material });
    const { heads, weights } = getMalletHeads({ type });

    return (
      <>
        <form id="mallet" onSubmit={handleSubmit}>
          {error && <p className="errorMessage">{error.message}</p>}
          <h2>Mallet</h2>
          <Options.Type onChange={onChange("type")} value={type} />
          <Options.Material onChange={onChange("material")} value={material} />
          <h2>Shaft</h2>
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
          <h2>Head</h2>
          <Options.Weight
            onChange={onChange("weight")}
            weights={weights}
            value={weight}
          />
          <Options.Head
            value={head}
            onChange={onChange("head")}
            heads={heads}
          />
          <input type="submit" />
        </form>
        <MalletPreview shaft={material} head={head} />
      </>
    );
  }
}
