import React, { Component } from 'react';

class MyFancyInput extends Component {
  render() {
    return (
      <div>
        <div>
          <input
            value={this.props.value}
            onChange={this.props.onChange}
          />
        </div>
      </div>
    );
  }
}

export default MyFancyInput;