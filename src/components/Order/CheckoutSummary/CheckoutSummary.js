import React from "react";

import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

import classes from "./CheckoutSummary.module.css";

const checkoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>Checkout Summary</h1>
      <Burger ingredients={props.ingredients} />
      <Button clicked={props.onCheckoutCancelled} btnType='Danger'>
        Cancel
      </Button>
      <Button clicked={props.onCheckoutSucceed} btnType='Success'>
        Continue
      </Button>
    </div>
  );
};

export default checkoutSummary;
