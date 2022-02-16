import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import axios from '../../../axios-orders';
import Spinner from '../../../components/Spinner/Spinner';
import useForm from '../../../hooks/useForm';

import classes from './ContactData.module.css';

function ContactData({ ingredients, price, onCheckoutCancelled }) {
  const history = useHistory();
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
        ingredients: ingredients,
        price: price,
        customer: { formData },
      };

      axios
        .post('/orders.json', order)
        .then(response => {
          setLoading(false);
          setIsValidated(false);
          history.push('/');
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
        <div className="d-lg-flex">
          <Button className="mr-lg-4 mb-2 mb-lg-0 w-100" type="button" variant="secondary" onClick={onCheckoutCancelled} size="lg">
            Cancel
          </Button>
          <Button className="w-100" type="submit" variant="primary" size="lg">
            Order
          </Button>
        </div>
      </Form>
    )
    : <Spinner />;

  return <div className={classes.ContactData}>{form}</div>;
}

export default ContactData;

ContactData.propTypes = {
  price: PropTypes.number.isRequired,
  ingredients: PropTypes.object.isRequired,
  onCheckoutCancelled: PropTypes.func.isRequired
};
