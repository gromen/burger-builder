import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from "../../components/Burger/Burger.module.css";
import classesGlobal from "../../App.module.css";

const Burger = (props) => {
  let ingredientsAll = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(Math.max(0, props.ingredients[igKey]))].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, curr) => {
      return arr.concat(curr);
    }, []);
  if (ingredientsAll.length === 0) {
    ingredientsAll = <p className={classesGlobal.TextCenter}>no ingredients</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
      {ingredientsAll}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
};

export default Burger;
