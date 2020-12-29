import React from "react";
import BurgerControl from "./BurgerControl/BurgerControl";
import PropTypes from "prop-types";
import classes from "./BurgerControl/BurgerControl.module.css";
import classesGlobal from "../../../App.module.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Meat", type: "meat" },
  { label: "Chesse", type: "chesse" },
  { label: "Onion", type: "onion" },
  { label: "Bacon", type: "bacon" },
];

const BurgerControls = ({ ingredientAdded, ingredientRemoved, disabled, totalPrice, canPurchase, order }) => (
  <div className={classesGlobal.TextCenter}>
    <p className={classesGlobal.TextCenter}>
      Total price: <strong>{totalPrice}</strong>
    </p>
    {controls.map((control) => (
      <BurgerControl
        added={() => ingredientAdded(control.type)}
        removed={() => ingredientRemoved(control.type)}
        key={control.label}
        label={control.label}
        type={control.type}
        disabledNote={disabled[control.type]}
      />
    ))}
    <button className={classes.OrderButton} disabled={canPurchase} onClick={order}>
      Order burger
    </button>
  </div>
);

BurgerControls.propTypes = {
  ingredientAdded: PropTypes.func.isRequired,
  ingredientRemoved: PropTypes.func.isRequired,
};

export default BurgerControls;
