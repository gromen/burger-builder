import React from 'react';
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
    <>
      <h3>Your order: </h3>
      <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
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
    </>
  );
}

export default orderSummary;
