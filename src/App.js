import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import "./App.css";

import MyFancyInput from "./MyFancyInput";

class App extends Component {
  state = {
    value: "",
  }
  onSearch = () => {
    
  }
  render() {
    return (
      <div className="App">
        <MyFancyInput
          value={this.state.value}
          onChange={(e) => this.setState({ value: e.target.value })}
        />

        <button onClick={this.onSearch}>Search</button>

      </div>
    );
  }
}

export default App;
