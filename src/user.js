import React, { Component } from "react";

import { Prompt } from "react-router-dom";

class User extends Component {
  state = {
    counter: 0,
    dirty: false,
  };
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(state => {
        return {
          counter: state.counter + 1,
          dirty: true,
        };
      });
    }, 3000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <Prompt when={this.state.dirty} message="Hey you're going to kill the count." />
        User {this.state.counter}
      </div>
    );
  }
}

export default User;
