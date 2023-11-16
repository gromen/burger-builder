import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';
import classesGlobal from '@/app/App.module.css';
import { type Ingredients } from '@/utils/ingredientPrices';

interface PropsBurger {
  ingredients: Ingredients;
  hasError?: boolean;
}

function Burger({ ingredients, hasError }: PropsBurger): JSX.Element {
  let ingredientsAll: JSX.Element | JSX.Element[] = Object.keys(ingredients)
    .map((ingredientsKey) =>
      [...Array(Math.max(0, ingredients[ingredientsKey]))].map((_, i) => (
        <BurgerIngredient
          key={ingredientsKey + i.toString()}
          type={ingredientsKey}
        />
      ))
    )
    .reduce((arr, curr) => arr.concat(curr), []);

  if (ingredientsAll.length === 0) {
    ingredientsAll = (
      <p className={classesGlobal.TextCenter} style={{ fontWeight: '600' }}>
        {hasError != null
          ? 'Add ingredients, please'
          : 'Sorry, something went wrong'}
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
