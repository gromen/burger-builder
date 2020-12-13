import React, { Component } from 'react';
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';
import Aux from '../../hoc/Aux';
import Burger from './../../components/Burger/Burger';
import PropTypes from 'prop-types';

const INGREDIENT_PRICES = {
  meat: 2,
  salad: 0.5,
  cheese: 1,
  onion: 0.4,
  bacon: 0.9,
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      meat: 0,
      salad: 0,
      chesse: 0,
      onion: 0,
      bacon: 0,
    },
    totalPrice: '',
  };

  ingredientAdd = (type) => {
    const countOld = this.state.ingredients[type];
    const countUpdated = countOld + 1;
    const ingredientsUpdated = {
      ...this.state.ingredients,
    };
    ingredientsUpdated[type] = countUpdated;
    const ingredientPrice = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = ingredientPrice + oldPrice;
    this.setState({ ingredients: ingredientsUpdated, totalPrice: newPrice });
  };

  ingredientRemove = (type) => {
    const countOld = this.state.ingredients[type];
    const countUpdated = countOld - 1;
    const ingredientsUpdated = {
      ...this.state.ingredients,
    };
    ingredientsUpdated[type] = countUpdated;
    this.setState({ ingredients: ingredientsUpdated });
  };

  render() {
    return (
      <Aux>
        {this.state.totalPrice}
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls
          ingredientAdded={this.ingredientAdd}
          ingredientRemoved={this.ingredientRemove}
        />
      </Aux>
    );
  }
}

BurgerBuilder.propTypes = {
  INGREDIENT_PRICES: PropTypes.number,
};

export default BurgerBuilder;
