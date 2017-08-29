import React, { Component } from "react";
import { Link } from "react-router-dom";
class ImageGrid extends Component {
  render() {
    return (
      <div className="columns is-multiline is-gapless">
        {this.props.images.map(gif => {
          const imgSrc = gif.images.downsized_medium;
          return (
            <Link
              to={`/image/${gif.id}`}
              key={gif.id}
              className="column is-4"
              style={{ height: "350px" }}
            >
              <img src={imgSrc.url} style={{ width: "100%", height: "100%" }} />
            </Link>
          );
        })}
      </div>
    );
  }
}

export default ImageGrid;
