import React from 'react';
import Aux from '../../../hoc/Aux';

const orderSummary = ({ ingredients }) => {
  const ingredientsItems = Object.keys(ingredients).map((ingredient) => {
    return (
      <li key={ingredient}>
        {ingredient}: {ingredients[ingredient]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your order: </h3>
      <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>{ingredientsItems}</ul>
    </Aux>
  );
};

export default orderSummary;
