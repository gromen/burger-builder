import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

import classes from "./CheckoutSummary.module.css";

function checkoutSummary({ ingredients, onCheckoutCancelled, onCheckoutSucceed }) {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>Checkout Summary</h1>
      <Burger ingredients={ingredients} />
      <Button clicked={onCheckoutCancelled} btnType='Danger'>
        Cancel
      </Button>
      <Button clicked={onCheckoutSucceed} btnType='Success'>
        Continue
      </Button>
    </div>
  );
}

export default checkoutSummary;
