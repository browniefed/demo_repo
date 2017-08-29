import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { getRandom } from "./api";

class NavBar extends Component {
  onClick = () => {
    getRandom().then(({ data }) => {
      this.props.history.push(`/image/${data.id}`);
    });
  };
  render() {
    return (
      <div className="columns">
        <div className="column">
          <Link className="button is-large is-black" to="/">
            Home
          </Link>
        </div>
        <div className="column">
          <Link className="button is-large is-black" to="/trending">
            Trending
          </Link>
        </div>
        <div className="column">
          <button className="button is-large is-info" onClick={this.onClick}>
            Random
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(NavBar);
