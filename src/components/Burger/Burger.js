import PropTypes from 'prop-types';
import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';
import classesGlobal from '../../App.module.css';

function Burger({ ingredients, hasError }) {
  let ingredientsAll = Object.keys(ingredients)
    .map(ingredientsKey => [...Array(Math.max(0, ingredients[ingredientsKey]))]
      .map((_, i) => <BurgerIngredient key={ingredientsKey + i} type={ingredientsKey} />))
    	.reduce((arr, curr) => arr.concat(curr), []);

  if (ingredientsAll.length === 0) {
    ingredientsAll = (
      <p className={classesGlobal.TextCenter} style={{ fontWeight: '600' }}>
        {!hasError ? 'Add ingredients, please' : 'Sorry, something went wrong'}
      </p>
    );
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredientsAll}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

export default Burger;

Burger.propTypes = {
  ingredients: PropTypes.object.isRequired,
  hasError: PropTypes.bool
};

Burger.defaultProps = {
  hasError: false
};
