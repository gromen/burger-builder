import React, { Component } from "react";

import BurgerControls from "../../components/Burger/BurgerControls/BurgerControls";
import Aux from "../../hoc/Aux/Aux";
import Burger from "./../../components/Burger/Burger";
import Modal from "../../components/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/Spinner/Spinner";
import WithErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const INGREDIENT_PRICES = {
  meat: 2,
  salad: 0.5,
  chesse: 1,
  onion: 0.4,
  bacon: 0.9,
};
class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: "",
    canPurchase: false,
    purchasing: false,
    loading: false,
    error: false,
  };

  componentDidMount() {
    axios
      .get("/ingredients.json")
      .then((response) => {
        this.setState({ ingredients: response.data });
      })
      .catch((error) => {
        this.setState({ error: true });
      });
  }

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
    this.setState({ loading: true });

    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "Marcin Gromek",
        address: {
          street: "teststreet",
          zipCode: "00-3323",
          country: "Poland",
        },
        email: "test@test.com",
      },
      deliveryMethod: "fast",
    };

    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false, purchasing: false });
        console.log(response);
      })
      .catch((error) => {
        this.setState({ loading: false, purchasing: false });
      });
  };

  render() {
    const disabledNote = {
      ...this.state.ingredients,
    };
    for (const key in disabledNote) {
      disabledNote[key] = disabledNote[key] <= 0;
    }

    let orderSummary = null;

    let burger = this.state.error ? (
      <p style={{ marginTop: "50px", textAlign: "center" }}>ingredients can't be loaded</p>
    ) : (
      <Spinner />
    );

    if (this.state.ingredients) {
      burger = (
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
        </Aux>
      );

      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          purchaseCancelled={this.purchaseCancel}
          purchaseProceed={this.purchaseContinue}
          price={this.state.totalPrice}
        />
      );
    }

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClose={this.purchaseCancel}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

export default WithErrorHandler(BurgerBuilder, axios);
