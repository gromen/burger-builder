import React from "react";
import classes from "./BurgerIngredient.module.css";
import PropTypes from "prop-types";

function BurgerIngredient({ type }) {
  let ingredient = null;

  switch (type) {
    case "bread-top":
      ingredient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      );
      break;
    case "bread-bottom":
      ingredient = <div className={classes.BreadBottom}></div>;
      break;
    case "meat":
      ingredient = <div className={classes.Meat}></div>;
      break;
    case "chesse":
      ingredient = <div className={classes.Cheese}></div>;
      break;
    case "salad":
      ingredient = <div className={classes.Salad}></div>;
      break;
    case "onion":
      ingredient = <div className={classes.Onion}></div>;
      break;
    case "bacon":
      ingredient = <div className={classes.Bacon}></div>;
      break;
    default:
      ingredient = null;
  }

  return ingredient;
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredient;
