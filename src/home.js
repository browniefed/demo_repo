import React, { Component } from "react";
import qs from "query-string";

import Grid from "./grid";

import { connect } from "react-redux";

import { searchImages } from "./actions/images";
import { clearPage } from "./actions/page";

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
    this.props.searchImages(value, "home");
  };

  handleSearch = e => {
    if (e.key !== "Enter") return;
    const query = qs.parse(this.props.location.search);
    this.search(query.search);
  };

  componentWillUnmount() {
    this.props.clearPage("home");
  }

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

const getImagesFromIds = (ids = [], images) => {
  return ids.map(id => {
    return images[id];
  });
};

const mapStateToProps = state => {
  const images = getImagesFromIds(state.page.home, state.images);

  return {
    images
  };
};

const mapDispatchProps = {
  searchImages,
  clearPage,
};

export default connect(mapStateToProps, mapDispatchProps)(HomeContainer);
