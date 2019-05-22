import React, { Component } from "react";
import ReactDOM from "react-dom";

import MalletPicker from "./MalletPicker";

import "./styles.css";


class App extends Component {
  constructor() {
    super();
    this.state = {
      step: 0,
      shaft: null,
      head: null
    };
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    const { step } = this.state;
    const Step = [
      () => <MalletPicker setShaft={this.setShaft} setHead={this.setHead} />
    ][step];
    return (
      <div className="App">
        <Step />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
