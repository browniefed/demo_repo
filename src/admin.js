import React, { Component } from "react";

const EMPTY_PRODUCT = {
  productName: "",
  description: "",
  price: 0,
};

class AdminContainer extends Component {
  state = EMPTY_PRODUCT;
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleAddItem = (e) => {
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
            <input
              name="productName"
              value={this.state.productName}
              onChange={this.handleChange}
              required
            />
            <input
              type="number"
              min="0"
              required
              name="price"
              value={this.state.price}
              onChange={this.handleChange}
            />
            <textarea
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
              required
            />
            <button>Add</button>
          </form>
        </div>
        <div>
          {
            this.props.list.map((item) => {
              return (
                <div>
                  <h4>{item.productName}</h4>
                  <h5>${item.price}</h5>
                  <p>{item.description}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default AdminContainer;
