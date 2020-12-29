import React, { Component } from "react";
import BurgerControls from "../../components/Burger/BurgerControls/BurgerControls";
import Aux from "../../hoc/Aux";
import Burger from "./../../components/Burger/Burger";
import Modal from "./../../components/Burger/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  meat: 2,
  salad: 0.5,
  chesse: 1,
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
    totalPrice: "",
    canPurchase: false,
    purchasing: false,
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
    const newPrice = parseFloat(ingredientPrice + oldPrice).toFixed(2);
    this.setState({ ingredients: ingredientsUpdated, totalPrice: Number(newPrice) });
    this.updatePurchaseState(ingredientsUpdated);
  };

  ingredientRemove = (type) => {
    const countOld = this.state.ingredients[type];
    const countUpdated = countOld - 1;
    const ingredientsUpdated = {
      ...this.state.ingredients,
    };
    ingredientsUpdated[type] = countUpdated;
    const ingredientPrice = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = parseFloat(oldPrice - ingredientPrice).toFixed(2);
    this.setState({ ingredients: ingredientsUpdated, totalPrice: Number(newPrice) });
    this.updatePurchaseState(ingredientsUpdated);
  };

  updatePurchaseState = (ingredients) => {
    this.setState({ canPurchase: Object.values(ingredients).some((value) => value) });
  };

  purchase = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancel = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinue = () => {
    alert("proceed!!!");
  };

  render() {
    const disabledNote = {
      ...this.state.ingredients,
    };
    for (const key in disabledNote) {
      disabledNote[key] = disabledNote[key] <= 0;
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls
          ingredientAdded={this.ingredientAdd}
          ingredientRemoved={this.ingredientRemove}
          disabled={disabledNote}
          totalPrice={this.state.totalPrice}
          canPurchase={!this.state.canPurchase}
          order={this.purchase}
        />
        <Modal show={this.state.purchasing} modalClose={this.purchaseCancel}>
          <OrderSummary
            ingredients={this.state.ingredients}
            purchaseCancelled={this.purchaseCancel}
            purchaseProceed={this.purchaseContinue}
            price={this.state.totalPrice}
          />
        </Modal>
      </Aux>
    );
  }
}

export default BurgerBuilder;
