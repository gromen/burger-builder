import React from 'react';
import Burger from '../../Burger/Burger';

import classes from './CheckoutSummary.module.css';

function checkoutSummary({ ingredients }) {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>Checkout Summary</h1>
      <Burger ingredients={ingredients} />
    </div>
  );
}

export default checkoutSummary;
