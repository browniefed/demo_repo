import React, { Component } from 'react';

import { Link } from "react-router-dom";

class HomeNav extends Component {
  render() {
    return (
      <div>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile/1">My Profile</Link>
      </div>
    );
  }
}

export default HomeNav;