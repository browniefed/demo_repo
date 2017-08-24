import React, { Component } from 'react';

class DisplayItem extends Component {
  render() {
    const { productName, price, description, children } = this.props;
    return (
      <div className="display_item">
        <h3>
          {productName} - ${price}
        </h3>
        <p>
          {description}
        </p>
        {children}
      </div>
    );
  }
}

export default DisplayItem;