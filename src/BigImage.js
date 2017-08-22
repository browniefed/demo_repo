import React, { Component } from "react";

const wrapWithCounter = RenderComponent => {
  class WrappedRenderComponent extends Component {
    state = {
      counter: 0,
    };

    componentDidMount() {
      this.interval = setInterval(() => {
        this.setState({
          counter: this.state.counter + 1,
        });
      }, 1000);
    }
    componentWillUnmount() {
      clearInterval(this.interval);
    }

    render() {
      return <RenderComponent {...this.state} />;
    }
  }
  return WrappedRenderComponent;
};

const Counter = ({ counter }) => {
  return (
    <div>
      {counter}
    </div>
  );
};

const NewWrappedComponenet = wrapWithCounter(Counter);

export default NewWrappedComponenet;
