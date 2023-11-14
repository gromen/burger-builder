import React from 'react';

import BurgerControl from './BurgerControl/BurgerControl';
import classes from './BurgerControl/BurgerControl.module.css';
import classesGlobal from '../../../App.module.css';
import CONTROLS from '../../../utils/controls';
import { useAppSelector } from '../../../hooks/redux-toolkit';

interface PropsBurgerControls {
  ingredientAdded: (type: string | number) => void;
  ingredientRemoved: (type: string | number) => void;
  disabled: boolean;
  canPurchase: boolean;
  onClickOrder: () => void;
}

const BurgerControls = ({
  ingredientAdded,
  ingredientRemoved,
  disabled,
  canPurchase,
  onClickOrder
}: PropsBurgerControls): JSX.Element => {
  const totalPrice = useAppSelector(
    (state) => state.burgerBuilderState.totalPrice
  );

  return (
    <div className={classesGlobal.TextCenter}>
      <p className={classesGlobal.TextCenter}>
        Total price: <strong>{totalPrice}</strong>
      </p>
      {CONTROLS.map((control) => (
        <BurgerControl
          added={() => {
            ingredientAdded(control.type);
          }}
          removed={() => {
            ingredientRemoved(control.type);
          }}
          key={control.label}
          label={control.label}
          // @ts-expect-error TODO refactor disabled[control.type] to meet ts requirements
          disabledNote={disabled[control.type]}
        />
      ))}
      <button
        type="button"
        className={classes.OrderButton}
        disabled={canPurchase}
        onClick={onClickOrder}
      >
        Order burger
      </button>
    </div>
  );
};

export default BurgerControls;
