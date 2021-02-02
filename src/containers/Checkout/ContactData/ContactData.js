import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

import classes from "./ContactData.module.css";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    valdated: false,
  };

  handleSubmit = (event) => {
    const form = event.target;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    this.setState({ validated: true });
  };

  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Contact Data</h4>
        <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
          <Form.Group controlId='email'>
            <Form.Control type='email' placeholder='Your email' />
          </Form.Group>
          <Form.Group controlId='name'>
            <Form.Control type='text' placeholder='Your name' />
          </Form.Group>
          <Form.Group controlId='street'>
            <Form.Control type='text' placeholder='street' />
          </Form.Group>
          <Form.Group controlId='postal'>
            <Form.Control type='text' placeholder='Postal code' />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Order
          </Button>
        </Form>
      </div>
    );
  }
}

export default ContactData;
