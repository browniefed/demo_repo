import React, { Component } from "react";
import "./App.css";

// Life Cycle Events
// Higher Order Components
// Selectors

class Unmounter extends Component {
  state = {
    counter: 0,
  }
  
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ counter: this.state.counter + 1})
    }, 1000)
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({
      counter: 0,
    })
  }

  componentWillUpdate() {
    
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  render() {
    console.count("re-renders")
    console.log(this.state.counter);

    return <div>{this.state.counter}</div>;
  }
}

class App extends Component {
  state = {
    value: "",
  };
  componentWillMount() {
    const value = this.state.value;
    // setState
  }
  componentDidMount() {
    // DOM is ready
  }
  componentWillReceiveProps(nextProps) {}
  componentWillUpdate(nextProps, nextState) {}
  componentDidUpdate(prevProps, prevState) {}

  render() {
    return (
      <div className="App">
        <input
          value={this.state.value}
          onChange={e => this.setState({ value: e.target.value })}
          style={{
            width: this.state.value ? "300px" : "auto",
          }}
        />
        {!this.state.value ? null : <Unmounter />}
      </div>
    );
  }
}

export default App;
