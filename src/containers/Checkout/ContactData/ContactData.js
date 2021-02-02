import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

import classes from "./ContactData.module.css";

function ContactData() {
  // const [data, setData] = useState({});
  const [isValidated, setIsValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.target;

    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    setIsValidated(true);
  };

  return (
    <div className={classes.ContactData}>
      <Form
        className={classes.ContactData}
        noValidate
        validated={isValidated}
        onSubmit={(event) => handleSubmit(event)}
      >
        <Form.Group controlId='email'>
          <Form.Control type='email' placeholder='Enter email' />
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Control type='text' placeholder='Your Name' />
        </Form.Group>

        <Form.Group controlId='street'>
          <Form.Control type='text' placeholder='Street' />
        </Form.Group>

        <Form.Group controlId='postalCode'>
          <Form.Control type='text' placeholder='Postal Code' />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ContactData;
