import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';
import classesGlobal from '../../App.module.css';

function Burger({ ingredients, error }) {
  let ingredientsAll = Object.keys(ingredients)
    .map(igKey => [...Array(Math.max(0, ingredients[igKey]))].map((_, i) => <BurgerIngredient key={igKey + i} type={igKey} />))
    .reduce((arr, curr) => arr.concat(curr), []);

  if (ingredientsAll.length === 0) {
    ingredientsAll = (
      <p className={classesGlobal.TextCenter} style={{ fontWeight: '600' }}>
        {!error ? 'Add ingredients, please' : 'Sorry, something went wrong'}
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

export default withRouter(Burger);

Burger.propTypes = {
  ingredients: PropTypes.object.isRequired
};