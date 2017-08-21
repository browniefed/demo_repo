import React, { Component } from "react";
import "./App.css";

import Input from "./input";
import Checkbox from "./checkbox";
import Message from "./message"

class App extends Component {
  state = {
    value: "",
    color: "#000",
    bold: false,
    underlined: false,
  };
  handleChange = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="App">
        <Input
          placeholder="Value"
          name="value"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <Input
          type="color"
          placeholder="Color"
          name="color"
          value={this.state.color}
          onChange={this.handleChange}
        />
        <Checkbox
          name="bold"
          label="Bold"
          value={this.state.bold}
          onChange={this.handleChange}
        />
        <Checkbox
          name="underlined"
          label="Underline"
          value={this.state.underlined}
          onChange={this.handleChange}
        />

        <Message {...this.state}>
          {this.state.value}
        </Message>
      </div>
    );
  }
}

export default App;
