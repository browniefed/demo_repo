import React, { Component } from "react";
import "./App.css";

import Admin from "./admin";
import User from "./user";
import Perf from "react-addons-perf";

// Immutability (no mutations)
// Pure functions
// shouldComponentUpdate

// Objects within list


class App extends Component {
  state = {
    list: [],
  };
  
  componentDidUpdate(prevProps, prevState) {
    Perf.stop();
    Perf.printWasted();
  }
  
  handleAddItem = item => {
    Perf.start();
    this.setState(state => {
      return {
        list: [{...item, id: Date.now() }, ...state.list],
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
