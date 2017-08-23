import React, { Component } from 'react';

class MyFancyInput extends Component {
  render() {
    const {
      error,
      submitted,
      ...rest
    } = this.props;

    return (
      <div>
        <input
          {...rest}
        />  
        {submitted && error && <div>{error}</div>}
      </div>
    );
  }
}

export default MyFancyInput;