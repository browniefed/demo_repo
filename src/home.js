import React, { Component } from "react";

import { search } from "./api";

class HomeContainer extends Component {
  state = {
    value: "",
    gifs: [],
  };
  handleSearch = e => {
    if (!e.key === "Enter") return;
    search(this.state.value).then(gifs => {
      this.setState({
        gifs: gifs.data,
      });
    });
  };
  render() {
    return (
      <div>
        <input
          value={this.state.value}
          onChange={e => this.setState({ value: e.target.value })}
          onKeyUp={this.handleSearch}
        />
        <div>
          {this.state.gifs.map(gif => {
            const imgSrc = gif.images.downsized_medium;
            return <img key={gif.id} src={imgSrc.url} />;
          })}
        </div>
      </div>
    );
  }
}

export default HomeContainer;
