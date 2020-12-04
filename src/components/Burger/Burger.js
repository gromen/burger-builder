import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from "../../components/Burger/Burger.module.css";

const Burger = (props) => {
  let ingredientsAll = Object.keys(props.ingredients)
    .map((key) => {
      return [...Array(props.ingredients[key])].map((_, i) => {
        return <BurgerIngredient key={key + i} type={key} />;
      });
    })
    .reduce((arr, curr) => {
      return arr.concat(curr);
    }, []);
  if (ingredientsAll.length === 0) {
    ingredientsAll = <p>no ingredients</p>;
  }
  console.log(ingredientsAll.length);
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
      {ingredientsAll}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
};

export default Burger;
