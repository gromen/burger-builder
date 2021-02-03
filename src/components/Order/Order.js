import { Card, Button, Badge } from "react-bootstrap";

function Order({ ingredients, price, orderDate, deliveryMethod }) {
  const orderIngredients = [];

  for (let ingredientName in ingredients) {
    orderIngredients.push({
      name: ingredientName,
      amount: ingredients[ingredientName],
    });
  }

  const orderIngredientsOutput = orderIngredients.map((ingredient) => (
    <Button
      className='mr-2 mb-2 mb-md-0 d-block d-md-inline-block text-capitalize'
      variant='primary'
      key={ingredient.name}
    >
      {ingredient.name} <Badge variant='light'>{ingredient.amount}</Badge>
      <span className='sr-only'>{ingredient.name}</span>
    </Button>
  ));

  return (
    <Card className='mt-3'>
      <Card.Header className='text-lg-right'>
        <strong>Order date:</strong> {orderDate}
      </Card.Header>
      <Card.Body>
        <Card.Title>Ingredients: {orderIngredientsOutput}</Card.Title>
        <Card.Text>Price: {price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Order;
