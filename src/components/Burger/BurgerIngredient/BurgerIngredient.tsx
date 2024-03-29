import classes from './BurgerIngredient.module.css';

interface PropsBurgerIngredient {
  type: string;
}

function BurgerIngredient({ type }: PropsBurgerIngredient): JSX.Element | null {
  let ingredient = null;

  switch (type) {
    case 'bread-top':
      ingredient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1} />
          <div className={classes.Seeds2} />
        </div>
      );

      break;
    case 'bread-bottom':
      ingredient = <div className={classes.BreadBottom} />;
      break;
    case 'meat':
      ingredient = <div className={classes.Meat} />;
      break;
    case 'cheese':
      ingredient = <div className={classes.Cheese} />;
      break;
    case 'salad':
      ingredient = <div className={classes.Salad} />;
      break;
    case 'onion':
      ingredient = <div className={classes.Onion} />;
      break;
    case 'bacon':
      ingredient = <div className={classes.Bacon} />;
      break;
    default:
      ingredient = null;
  }

  return ingredient;
}

export default BurgerIngredient;
