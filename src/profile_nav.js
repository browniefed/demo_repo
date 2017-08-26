import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ProfileNav extends Component {
  render() {
    const { match } = this.props;
    const url = match.url;

    return (
      <div>
        <Link to={`${url}/photos`}>Photos</Link>
        <Link to={`${url}/comments`}>Comments</Link>
      </div>
    );
  }
}

export default ProfileNav;