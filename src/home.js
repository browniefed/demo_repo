import React, { Component } from "react";
import qs from "query-string";

import Grid from "./grid";
import { search } from "./api";

class HomeContainer extends Component {
  state = {
    value: "",
    images: [],
  };

  componentDidMount() {
    const query = qs.parse(this.props.location.search);

    if (query.search) {
      this.search(query.search);
    }
  }
  handleTypeChange = e => {
    const query = qs.stringify({
      search: e.target.value,
    });

    this.props.history.replace(`/?${query}`);
  };
  search = value => {
    search(value).then(gifs => {
      this.setState({
        images: gifs.data,
      });
    });
  };

  handleSearch = e => {
    if (e.key !== "Enter") return;
    const query = qs.parse(this.props.location.search);
    this.search(query.search);
  };

  render() {
    const query = qs.parse(this.props.location.search);

    return (
      <div>
        <input
          placeholder="Search For GIFS"
          className="input is-primary is-large"
          value={query.search || ""}
          onChange={this.handleTypeChange}
          onKeyUp={this.handleSearch}
        />
        <div>
          <Grid images={this.state.images} />
        </div>
      </div>
    );
  }
}

export default HomeContainer;
