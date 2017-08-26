import React, { Component } from "react";

import { Link, Switch, Route, Prompt } from "react-router-dom";

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
    }, 500);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { match } = this.props;
    const userId = match.params.userId;
    const url = match.url;

    return (
      <div>

        User {this.state.counter}
        <Link to={`${url}/photos`}>Photos</Link>
        <Link to={`${url}/comments`}>Comments</Link>

        
        <Switch>
          <Route path={`${this.props.match.path}/photos`} render={() => <div>Hey look at all my photos</div>}/>
          <Route path={`${this.props.match.path}/comments`} render={() => <div>Comment on my wall</div>}/>
        </Switch>
      </div>
    );
  }
}

export default User;
