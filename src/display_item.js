import React, { Component } from "react";
import PropTypes from "prop-types";

class DisplayItem extends Component {
  static propTypes = {
    productName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    children: PropTypes.node,
  }
  shouldComponentUpdate(nextProps) {
    return (
      nextProps.productName !== this.props.productName &&
      nextProps.price !== this.props.price &&
      nextProps.description !== this.props.description &&
      nextProps.children !== this.props.children
    )
  }
  
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
