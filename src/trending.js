import React, { Component } from 'react';

import Grid from "./grid";
import { getTrending } from "./api";

class TrendingContainer extends Component {
  state = {
    images: []
  }
  componentDidMount() {
    getTrending().then(gifs => {
      this.setState({
        images: gifs.data,
      });
    });
  }
  
  render() {
    return (
      <div>
        <Grid
          images={this.state.images}
        />
      </div>
    );
  }
}

export default TrendingContainer;