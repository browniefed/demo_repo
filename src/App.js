import React, { Component } from "react";
import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";
import Home from "./home";
import About from "./about"

class App extends Component {
  render() {
    return (
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </div>
    );
  }
}

export default App;
