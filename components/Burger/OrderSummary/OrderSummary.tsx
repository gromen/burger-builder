import { Button } from 'react-bootstrap';
import { type Ingredients } from '@/utils/ingredientPrices';

interface PropsOrderSummary {
  ingredients: Ingredients;
  purchaseCancelled: () => void;
  purchaseProceed: () => void;
  price: number;
}

function orderSummary({
  ingredients,
  purchaseCancelled,
  purchaseProceed,
  price
}: PropsOrderSummary): JSX.Element {
  const ingredientsItems = Object.keys(ingredients).map((ingredient) => (
    <li key={ingredient}>
      {ingredient}:{ingredients[ingredient]}
    </li>
  ));

  return (
    <>
      <h3>Your order: </h3>
      <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
        {ingredientsItems}
      </ul>
      <p>
        <strong>
          Total price:
          {price}
        </strong>
      </p>
      <Button className="mr-2" variant="secondary" onClick={purchaseCancelled}>
        Cancel
      </Button>
      <Button variant="primary" onClick={purchaseProceed}>
        Continue
      </Button>
    </>
  );
}

export default orderSummary;
