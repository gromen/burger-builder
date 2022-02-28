import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

import classes from './CheckoutSummary.module.css';

function checkoutSummary({ ingredients, onCheckoutCancelled, onCheckoutSucceed }) {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>Checkout Summary</h1>
      <Burger ingredients={ingredients} />
      <Button type="button" btnType="Danger" clicked={onCheckoutCancelled}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={onCheckoutSucceed}>
        Continue
      </Button>
    </div>
  );
}

export default checkoutSummary;
