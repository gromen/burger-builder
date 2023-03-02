import PropTypes from 'prop-types';
import React from 'react';
import { Badge, Button, Card } from 'react-bootstrap';

function Order({ ingredients, price, orderDate }) {
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
      className="mr-2 mt-2 mt-md-0 d-block d-md-inline-block text-capitalize"
      variant="primary"
      key={ingredient.name}
    >
      {ingredient.name} <Badge variant="light">{ingredient.amount}</Badge>
      <span className="sr-only">
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

Order.propTypes = {
  ingredients: PropTypes.object.isRequired,
  price: PropTypes.string.isRequired,
  orderDate: PropTypes.string.isRequired
};
