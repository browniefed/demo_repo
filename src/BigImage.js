import React, { Component } from "react";

const wrapImage = RenderComponent => {
  class WrappedRenderComponent extends Component {
    state = {
      loading: true,
      error: true,
      data: {},
    };

    mount = false;

    componentDidMount() {
      this.mount = true;

      return fetch("https://unsplash.it/list").then(res => res.json()).then(
        pictures => {
          if (!this.mount) return;

          this.setState({
            loading: false,
            data: pictures[this.props.id],
          });
        },
        e => {
          if (!this.mount) return;

          this.setState({
            loading: false,
            error: "Failed to load data " + e.message,
          });
        },
      );
    }

    componentWillUnmount() {
      this.mount = false;
    }

    render() {
      return (
        <RenderComponent
          {...this.props}
          {...this.state}
        />
      );
    }
  }
  return WrappedRenderComponent;
};

class BigImage extends Component {
  componentDidMount() {
    
  }
  
  render() {
    if (this.props.loading) return <div>Loading Big Image</div>;

    return (
      <div>
        <img src={`https://unsplash.it/800/800?image=${this.props.data.id}`} />
        <button onClick={this.props.onClear}>Clear</button>
      </div>
    );
  }
}

const NewWrappedComponenet = wrapImage(BigImage);

export default NewWrappedComponenet;
