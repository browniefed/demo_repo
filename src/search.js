import React, { Component } from "react";
import qs from "query-string";


class Search extends Component {
  state = {
    value: qs.parse(this.props.location.search).value || "",
  };
  
  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };
  handleKeyUp = (e) => {
    if (e.key === "Enter") {
      this.props.history.push(`/search?value=${this.state.value}`)
    }
  }
  componentWillReceiveProps(nextProps) {
    const value = qs.parse(nextProps.location.search).value || "";
    this.setState({
      value
    })
  }
  
  render() {
    const query = qs.parse(this.props.location.search);

    return (
      <div>
        Search
        <input 
          value={this.state.value} 
          onChange={this.handleChange} 
          onKeyUp={this.handleKeyUp}
        />
      </div>
    );
  }
}

export default Search;
