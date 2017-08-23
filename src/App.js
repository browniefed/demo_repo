import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import "./App.css";

import MyFancyInput from "./MyFancyInput";

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

const getErrors = (state) => {
  let errors = {};
  if (!state.firstName) errors.firstName = "First name is required";
  if (!validateEmail(state.email)) errors.email = "This isn't a valid email";

  return errors;
}

class App extends Component {
  state = {
    firstName: "",
    email: "",
    submitted: false,
  }
  onSearch = (e) => {
    const errors = getErrors(this.state);
    this.setState({ submitted: true });

    if (Object.keys(errors).length) return;

    // Submission

  }

  render() {
    const { submitted } = this.state;
    // const submitted = this.state.submitted;
    const errors = getErrors(this.state);

    return (
      <div className="App">
          <MyFancyInput
            value={this.state.firstName}
            onChange={(e) => this.setState({ firstName: e.target.value })}
            name="firstName"
            submitted={submitted}
            error={errors.firstName}
          />  
    
          <MyFancyInput
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
            name="email"
            submitted={submitted}
            error={errors.email}
          />  
          <button onClick={this.onSearch}>Search</button>
      </div>
    );
  }
}

export default App;
