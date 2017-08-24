import React, { Component } from "react";

import DisplayItem from "./display_item";
import List from "./list";


const getTotalPrice = cart => {
  cart = [
    ...cart,
  ]
  let totalPrice = 0;
  cart.forEach(({ price }) => (totalPrice += parseInt(price, 10)));
  return totalPrice;
};

class User extends Component {
  state = {
    cart: [],
  };
  handleAddToCart = item => {
    this.setState(state => {
      return {
        cart: [...state.cart, item],
      };
    });
  };

  handleCheckout = () => {
    this.setState({
      cart: [],
    });
  };
  render() {

    const cartHasItems = !!this.state.cart.length;

    return (
      <div>
        <List>
          {this.props.list.map(item => {
            return (
              <DisplayItem key={item.id}
                {...item}
              >
                <button onClick={() => this.handleAddToCart(item)}>Add to Cart</button>
              </DisplayItem>
            );
          })}
        </List>

        {cartHasItems && <h2>Items in Cart</h2>}
        {!cartHasItems && <h2>Add items to your cart</h2>}
        <List>
          {this.state.cart.map(item => {
            return <DisplayItem {...item} />;
          })}
        </List>
        {cartHasItems && <div>
          <h1>
            Subtotal: ${getTotalPrice(this.state.cart)}
          </h1>
          <button onClick={this.handleCheckout}>Checkout</button>
        </div>}
      </div>
    );
  }
}

export default User;
