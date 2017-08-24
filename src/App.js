import React, { Component } from "react";
import "./App.css";

import Admin from "./admin";
import User from "./user";

class App extends Component {
  state = {
    list: [],
  };
  handleAddItem = item => {
    this.setState(state => {
      return {
        list: [...state.list, item],
      };
    });
  };

  render() {
    return (
      <div className="App">
        <div className="half">
          <User
            list={this.state.list}
          />
        </div>
        <div className="half">
          <Admin 
            list={this.state.list}
            onAddItem={this.handleAddItem}
          />
        </div>
      </div>
    );
  }
}

export default App;
