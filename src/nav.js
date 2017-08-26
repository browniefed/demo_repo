import React, { Component } from 'react';

import HomeNav from "./home_nav";
import ProfileNav from "./profile_nav";

import { Switch, Route } from "react-router-dom";

class MasterNav extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/profile/:userId" component={ProfileNav} />
          <Route component={HomeNav} />
        </Switch>
      </div>
    );
  }
}

export default MasterNav;