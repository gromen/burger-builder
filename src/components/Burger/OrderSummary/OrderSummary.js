import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

function orderSummary({
  ingredients, purchaseCancelled, purchaseProceed, price
}) {
  const ingredientsItems = Object.keys(ingredients).map(ingredient => (
    <li key={ingredient}>
      {ingredient}
      :
      {ingredients[ingredient]}
    </li>
  ));

  return (
    <Aux>
      <h3>Your order: </h3>
      <ul
        style={{ listStyleType: 'none', paddingLeft: '0' }}
      >
        {ingredientsItems}
      </ul>
      <p>
        <strong>
          Total price:
          {price}
        </strong>
      </p>
      <Button btnType="Danger" clicked={purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={purchaseProceed}>
        CONTINUE
      </Button>
    </Aux>
  );
}

export default orderSummary;
