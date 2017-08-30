import React, { Component } from "react";
import qs from "query-string";

import Grid from "./grid";

import { connect } from "react-redux";

import { searchImages } from "./actions/images";

class HomeContainer extends Component {
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
    this.props.searchImages(value);
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
          <Grid images={this.props.images} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    images: state.images
  }
}

const mapDispatchProps = {
  searchImages
}



export default connect(mapStateToProps, mapDispatchProps)(HomeContainer);
