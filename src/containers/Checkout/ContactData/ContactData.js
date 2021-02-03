import React, { useState } from "react";
import axios from "../../../axios-orders";
import Spinner from "../../../components/Spinner/Spinner";
import { Form, Button } from "react-bootstrap";

import classes from "./ContactData.module.css";

function ContactData(props) {
  // const [data, setData] = useState({});
  const [isValidated, setIsValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  const handleSubmit = (event) => {
    const form = event.target;

    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setLoading(true);

      const order = {
        ingredients: props.ingredients,
        price: props.price,
        customer: {
          name: "Marcin Gromek",
          address: {
            street: "teststreet",
            zipCode: "00-3323",
            country: "Poland",
          },
          email: "test@test.com",
        },
        deliveryMethod: "fast",
      };

      axios
        .post("/orders.json", order)
        .then((response) => {
          setLoading(false);
          setIsValidated(false);
          setData(JSON.parse(response.config.data));
          props.history.push("/");
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
        });
    }
    setIsValidated(true);
  };

  const form = !loading ? (
    <Form className={classes.ContactData} noValidate validated={isValidated} onSubmit={(event) => handleSubmit(event)}>
      <Form.Group controlId='email'>
        <Form.Control type='email' placeholder='Enter email' required />
      </Form.Group>

      <Form.Group controlId='formBasicPassword'>
        <Form.Control type='text' placeholder='Your Name' required />
      </Form.Group>

      <Form.Group controlId='street'>
        <Form.Control type='text' placeholder='Street' required />
      </Form.Group>

      <Form.Group controlId='postalCode'>
        <Form.Control type='text' placeholder='Postal Code' required />
      </Form.Group>

      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  ) : (
    <Spinner />
  );

  return <div className={classes.ContactData}>{form}</div>;
}

export default ContactData;
