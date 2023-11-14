import React, { FormEvent, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import axios from '../../../axios-orders';
import Spinner from '../../../components/Spinner/Spinner';
import useForm from '../../../hooks/useForm';

import classes from './ContactData.module.css';
export type ContactDataProps = {
  ingredients: { [key: string]: number };
  price: number;
  onCheckoutCancelled: () => void;
};

function ContactData({
  ingredients,
  price,
  onCheckoutCancelled
}: ContactDataProps) {
  const navigate = useNavigate();
  const [isValidated, setIsValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const { formData, inputChangeHandler } = useForm({
    name: '',
    email: '',
    zipCode: '',
    country: '',
    street: ''
  });

  const handleSubmit = (event: FormEvent) => {
    const form = event.target as HTMLFormElement;
    const dateFormatted = new Date().toLocaleString('pl-PL', {
      year: 'numeric',
      month: 'numeric',
      day: '2-digit',
      hour: 'numeric',
      minute: 'numeric',
      hourCycle: 'h23'
    });

    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setLoading(true);

      const order = {
        orderDate: dateFormatted,
        ingredients,
        price,
        customer: { formData }
      };

      axios
        .post('/orders.json', order)
        .then(() => {
          setLoading(false);
          setIsValidated(false);
          navigate('/');
        })
        .catch((error) => {
          setLoading(false);
          console.error(error);
        });
    }

    setIsValidated(true);
  };

  const form = !loading ? (
    <Form
      className={classes.ContactData}
      noValidate
      validated={isValidated}
      onSubmit={(event) => handleSubmit(event)}
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
        <Button
          className="mr-lg-4 mb-2 mb-lg-0 w-100"
          type="button"
          variant="secondary"
          onClick={onCheckoutCancelled}
          size="lg"
        >
          Cancel
        </Button>
        <Button className="w-100" type="submit" variant="primary" size="lg">
          Order
        </Button>
      </div>
    </Form>
  ) : (
    <Spinner />
  );

  return <div className={classes.ContactData}>{form}</div>;
}

export default ContactData;
