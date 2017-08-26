import React, { Component } from "react";
import "./App.css";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./home";
import About from "./about"
import User from "./user";
import NoMatch from "./nomatch";

import MasterNav from "./nav";

class App extends Component {
  render() {
    return (
        <div className="App">
          <MasterNav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/profile/:userId" component={User} />
            <Redirect from="/home" to="/" />
            <Route component={NoMatch} />
          </Switch>
        </div>
    );
  }
}

export default App;
