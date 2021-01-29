import React from "react";

import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

import classes from "./CheckoutSummary.module.css";

const checkoutSummary = ({ ingredients }) => (
  <div className={classes.CheckoutSummary}>
    <h1>Checkout Summary</h1>
    <Burger ingredients={ingredients} />
    <Button btnType='Danger'>Cancel</Button>
    <Button btnType='Success'>Continue</Button>
  </div>
);

export default checkoutSummary;
