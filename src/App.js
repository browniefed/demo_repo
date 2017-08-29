import React, { Component } from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";

import Home from "./home";
import Trending from "./trending";
import Image from "./image";
import Nav from "./nav";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/trending" component={Trending} />
          <Route path="/image/:imageId" component={Image} />
        </Switch>
      </div>
    );
  }
}

export default App;
