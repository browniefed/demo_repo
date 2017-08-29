import React, { Component } from "react";

import { getImage } from "./api";

class ImageContainer extends Component {
  state = {
    loading: true,
    image: {},
  };
  componentDidMount() {
    const id = this.props.match.params.imageId;
    this.loadImage(id);
  }
  loadImage = imageId => {
    getImage(imageId).then(({ data }) => {
      this.setState({
        loading: false,
        image: data,
      });
    });
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.imageId !== this.props.match.params.imageId) {
      this.setState({
        loading: true,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // Image changed on same route lets reload stuff
    if (prevProps.match.params.imageId !== this.props.match.params.imageId) {
      this.loadImage(this.props.match.params.imageId);
    }
  }

  render() {
    if (this.state.loading) return <div>Loading...</div>;
    return (
      <div>
        <img src={this.state.image.images.original.url} />
        <h5>
          Rating: {this.state.image.rating}
        </h5>
        <div>
          <a href={this.state.image.url}>Giphy Source</a>
        </div>
      </div>
    );
  }
}

export default ImageContainer;
