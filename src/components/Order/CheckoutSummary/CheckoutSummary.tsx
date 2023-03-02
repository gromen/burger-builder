import React from 'react';
import Burger from '../../Burger/Burger';

import classes from './CheckoutSummary.module.css';
import { type Ingredients } from '../../../utils/ingredientPrices';

interface PropsCheckoutSummary {
  ingredients: Ingredients;
}

function checkoutSummary({ ingredients }: PropsCheckoutSummary): JSX.Element {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>Checkout Summary</h1>
      <Burger ingredients={ingredients} />
    </div>
  );
}

export default checkoutSummary;
