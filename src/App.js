import React, { Component } from "react";
import "./App.css";

import Admin from "./admin";

class App extends Component {
  state = {
    list: [],
  };
  handleAddItem = item => {
    this.setState(state => {
      state.counter == 0;
      return {
        list: [...state.list, item],
      };
    });
  };

  render() {
    return (
      <div className="App">
        <Admin 
          list={this.state.list}
          onAddItem={this.handleAddItem}
        />
      </div>
    );
  }
}

export default App;
