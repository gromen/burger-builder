import React from 'react';
import PropTypes from 'prop-types';
import BurgerControl from './BurgerControl/BurgerControl';
import classes from './BurgerControl/BurgerControl.module.css';
import classesGlobal from '../../../App.module.css';
import CONTROLS from '../../../utils/controls';

const BurgerControls = ({
  ingredientAdded, ingredientRemoved, disabled, totalPrice, canPurchase, order
}) => (
  <div className={classesGlobal.TextCenter}>
    <p className={classesGlobal.TextCenter}>
      Total price:
      {' '}
      <strong>{totalPrice}</strong>
    </p>
    {CONTROLS.map(control => (
      <BurgerControl
        added={() => ingredientAdded(control.type)}
        removed={() => ingredientRemoved(control.type)}
        key={control.label}
        label={control.label}
        type={control.type}
        disabledNote={disabled[control.type]}
      />
		))}
    <button
      type="button"
      className={classes.OrderButton} disabled={canPurchase}
      onClick={order}
    >
      Order burger
    </button>
  </div>
);

export default BurgerControls;

BurgerControls.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  canPurchase: PropTypes.bool.isRequired,
  order: PropTypes.func.isRequired,
  ingredientAdded: PropTypes.func.isRequired,
  ingredientRemoved: PropTypes.func.isRequired,
  disabled: PropTypes.any.isRequired
};
