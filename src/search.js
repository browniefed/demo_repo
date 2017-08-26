import React, { Component } from "react";
import qs from "query-string";


class Search extends Component {
  handleChange = e => {
    this.props.history.replace(`/search?${qs.stringify({ value: e.target.value })}`);
  };
  render() {
    const query = qs.parse(this.props.location.search);

    return (
      <div>
        Search
        <input 
          value={query.value || "" } 
          onChange={this.handleChange} 
        />

      </div>
    );
  }
}

export default Search;
