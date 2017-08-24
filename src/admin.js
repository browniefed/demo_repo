import React, { Component } from "react";
import PropTypes from "prop-types";

import DisplayItem from "./display_item";
import List from "./list";

const EMPTY_PRODUCT = {
  productName: "",
  description: "",
  price: 0,
};

class AdminContainer extends Component {
  static propTypes = {
    list: PropTypes.arrayOf(
      PropTypes.shape({
        productName: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
      }),
    ).isRequired,
    onAddItem: PropTypes.func.isRequired,
  };
  state = EMPTY_PRODUCT;
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleNumberChange = e => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10),
    });
  };

  handleAddItem = e => {
    e.preventDefault();

    this.props.onAddItem(this.state);
    this.setState(EMPTY_PRODUCT);
  };
  render() {
    return (
      <div>
        <h1>Admin</h1>
        <div>
          <form onSubmit={this.handleAddItem}>
            <div className="input_row">
              <label>Product Name: </label>
              <input
                name="productName"
                value={this.state.productName}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="input_row">
              <label>Price: </label>
              <input
                type="number"
                min="0"
                required
                name="price"
                value={this.state.price}
                onChange={this.handleNumberChange}
              />
            </div>
            <div className="input_row">
              <label>Description: </label>
              <div>
                <textarea
                  name="description"
                  value={this.state.description}
                  onChange={this.handleChange}
                  required
                  rows="5"
                />
              </div>
            </div>
            <button>Add</button>
          </form>
        </div>
        <List>
          {this.props.list.map(item => {
            return <DisplayItem {...item} />;
          })}
        </List>
      </div>
    );
  }
}

export default AdminContainer;
