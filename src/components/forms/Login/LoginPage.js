import React, { useState } from 'react';
import {
  Button, Col, Container, Form, Row
} from 'react-bootstrap';

const LoginPage = () => {
  const [validated, setValidated] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const onSubmit = event => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    }
  };

  const onClickSwitchAuthMethod = () => setIsLogin(prevState => !prevState);

  const AuthMethodButtonText = () => (
    <>
      <Button className="w-100 mb-2" variant="primary" type="submit">
        {isLogin
					? 'Login'
					: 'Create Account'}
      </Button>
      <Form.Text style={{ display: 'inline-block' }}>
        {isLogin
					? 'Don\'t have an account ? '
					: 'Already have an account ? '}
      </Form.Text>
      <Button
        variant="link"
        className="text-dark p-0 pl-1 btn-out"
        onClick={onClickSwitchAuthMethod}
        >
        <small className="text-danger">
          {isLogin
						? 'Create one now.'
						: 'Log in'}
        </small>
      </Button>
    </>
  );

  return (
    <Container className="pt-5">
      <Row className="justify-content-center">
        <Col xs lg="6">
          <h1 className="h3 text-center mb-3">{isLogin ? 'Sign in' : 'Sign up'}</h1>
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
              <Form.Text muted>
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
            <AuthMethodButtonText />
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
