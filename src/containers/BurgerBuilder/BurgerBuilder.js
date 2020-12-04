import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "./../../components/Burger/Burger";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      meat: 0,
      salad: 0,
      chesse: 0,
      onion: 0,
    },
  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <p>burger builder controls</p>
      </Aux>
    );
  }
}

export default BurgerBuilder;
