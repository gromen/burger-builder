import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

import axios from '../../../axios-orders';
import Spinner from '../../../components/Spinner/Spinner';
import useForm from '../../../hooks/useForm';

import classes from './ContactData.module.css';

function ContactData(props) {
  const [isValidated, setIsValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const { formData, inputChangeHandler } = useForm({
    name: '',
    email: '',
    zipCode: '',
    country: '',
    street: '',
  });

  const handleSubmit = event => {
    const form = event.target;

    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setLoading(true);

      const orderDate = new Date();
      const order = {
        orderDate: orderDate.toLocaleString('pl-PL', {
          year: 'numeric',
          month: 'numeric',
          day: '2-digit',
          hour: 'numeric',
          minute: 'numeric',
          hourCycle: 'h23',
        }),
        ingredients: props.ingredients,
        price: props.price,
        customer: {
          formData,
        },
      };

      axios
        .post('/orders.json', order)
        .then(response => {
          setLoading(false);
          setIsValidated(false);
          props.history.push('/');
        })
        .catch(error => {
          setLoading(false);
          console.error(error);
        });
    }

    setIsValidated(true);
  };

  const form = !loading
    ? (
      <Form
        className={classes.ContactData}
        noValidate
        validated={isValidated}
        onSubmit={event => handleSubmit(event)}
        >
        <Form.Group controlId="email">
          <Form.Control
            name="email"
            onChange={inputChangeHandler}
            placeholder="Enter email"
            required
            type="email"
          />
        </Form.Group>

        <Form.Group controlId="name">
          <Form.Control
            name="name"
            onChange={inputChangeHandler}
            placeholder="Your Name"
            required
            type="text"
          />
        </Form.Group>

        <Form.Group controlId="street">
          <Form.Control
            name="street"
            onChange={inputChangeHandler}
            placeholder="Street"
            required
            type="text"
          />
        </Form.Group>

        <Form.Group controlId="country">
          <Form.Control
            name="country"
            onChange={inputChangeHandler}
            placeholder="country"
            required
            type="text"
          />
        </Form.Group>

        <Form.Group controlId="zipCode">
          <Form.Control
            name="zipCode"
            type="text"
            placeholder="Zip Code"
            required
            onChange={inputChangeHandler}
          />
        </Form.Group>

        <Button type="submit" variant="primary">
          Order
        </Button>
      </Form>
    )
    : <Spinner />;

  return <div className={classes.ContactData}>{form}</div>;
}

export default ContactData;
