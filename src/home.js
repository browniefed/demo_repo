import React, { Component } from "react";

class HomeContainer extends Component {
  state = {
    value: "",
  };
  handleSearch = (e) => {
    if (!e.key === "Enter") return;

    
  }
  render() {
    return (
      <div>
        <input 
          value={this.state.value} onChange={e => this.setState({ value: e.target.value })}
          onKeyUp={this.handleSearch}
        />
      </div>
    );
  }
}

export default HomeContainer;
