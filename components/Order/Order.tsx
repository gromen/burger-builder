import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { type Ingredients } from '@/utils/ingredientPrices';

interface PropsOrder {
  ingredients: Ingredients;
  price: number;
  orderDate: Date;
}

function Order({ ingredients, price, orderDate }: PropsOrder): JSX.Element {
  const orderIngredients = [];

  for (const ingredientName in ingredients) {
    orderIngredients.push({
      name: ingredientName,
      amount: ingredients[ingredientName]
    });
  }

  const orderIngredientsOutput = orderIngredients.map((ingredient) => (
    <Button
      type="button"
      className="me-2 mt-2 mt-md-0 d-block d-md-inline-block text-capitalize"
      variant="primary"
      key={ingredient.name}
    >
      {ingredient.name} <Badge bg="secondary">{ingredient.amount}</Badge>
      <span className="visually-hidden">
        {ingredient.name} amount:
        {ingredient.amount}
      </span>
    </Button>
  ));

  return (
    <Card className="mt-3">
      <Card.Header className="text-lg-right">
        <strong>Order date:</strong> {orderDate}
      </Card.Header>
      <Card.Body>
        <Card.Title>
          Ingredients:
          {orderIngredientsOutput}
        </Card.Title>
        <Card.Text>
          Price:
          {price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Order;
