import React, { Component } from "react";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      onion: 1,
      bacon: 1,
      cheese: 1,
      meat: 1,
    },
  };

  componentDidMount() {
    const urlParams = new URLSearchParams(this.props.location.search);
    let ingredients = {};

    for (let param of urlParams.entries()) {
      ingredients[param[0]] = +param[1];
    }

    this.setState({ ingredients: ingredients });
  }

  onCheckoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  onCheckoutSucceedHandler = () => {
    // this.setState({ingredients: this})
    this.props.history.replace("/checkout");
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          onCheckoutSucceed={this.onCheckoutSucceedHandler}
          onCheckoutCancelled={this.onCheckoutCancelledHandler}
          ingredients={this.state.ingredients}
        />
      </div>
    );
  }
}

export default Checkout;
