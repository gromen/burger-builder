import React, { useContext, useEffect, useState } from 'react';
import {
  Button, Col, Container, Form, Row
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../store/auth-context';

const LoginPage = () => {
  const history = useHistory();
  const { onLogin } = useContext(AuthContext);
  const [validated, setValidated] = useState(false);

  const onSubmit = event => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);

      return;
    }

    onLogin();
    history.push('/');
  };

  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/');
    }
  }, [history, isLoggedIn]);

  return (
    <>
      {!isLoggedIn && (
        <Container className="pt-5">
          <Row className="justify-content-center">
            <Col xs lg="6">
              <h1 className="h3 text-center mb-3">Please, log in to build your own burger;)</h1>
              <Form noValidate validated={validated} onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control required type="email" placeholder="Enter email" />
                  <Form.Control.Feedback as="small" type="invalid">
                    Wrong email address
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    required
                    type="password"
                    placeholder="Password"
                    pattern="^(?=.*[a-z])(?=.*[A-Z]).{8,}$"
                  />
                  <Form.Text className="text-muted">
                    Your password must greater or equal 8 characters long, contain one lowercase and one uppercase character
                  </Form.Text>
                  <Form.Control.Feedback as="small" type="invalid">
                    At least one lowercase letter
                    {' '}
                    <br />
                    The total length should be greater than or equal to 8
                    {' '}
                    <br />
                  </Form.Control.Feedback>
                </Form.Group>
                <Button className="w-100" variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default LoginPage;
