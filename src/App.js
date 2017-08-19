import React, { Component } from "react";
import "./App.css";

const Sidebar = ({ children }) => {
  return (
    <div className="sidebar">
      {children}
    </div>
  );
};

const Content = ({ children }) => {
  return (
    <div className="content">
      {children}
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar>
          <div>Fancy Sidebar</div>
        </Sidebar>
        <Content>
          <div>Hello</div>
        </Content>
      </div>
    );
  }
}

export default App;
