import React from 'react';
import BurgerControl from './BurgerControl/BurgerControl';
import PropTypes from 'prop-types';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Meat', type: 'meat' },
  { label: 'Chesse', type: 'chesse' },
  { label: 'Onion', type: 'onion' },
  { label: 'Bacon', type: 'bacon' },
];

const BurgerControls = ({ ingredientAdded, ingredientRemoved }) => (
  <div>
    {controls.map((control) => (
      <BurgerControl
        added={() => ingredientAdded(control.type)}
        removed={() => ingredientRemoved(control.type)}
        key={control.label}
        label={control.label}
        type={control.type}
      />
    ))}
  </div>
);

BurgerControls.propTypes = {
  ingredientAdded: PropTypes.func.isRequired,
  ingredientRemoved: PropTypes.func.isRequired,
};

export default BurgerControls;
