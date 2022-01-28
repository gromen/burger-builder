import React, { useContext } from 'react';
import {
  Button, Col, Container, Form, Row
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../store/auth-context';

const Login = () => {
  const history = useHistory();
  const { onLogin } = useContext(AuthContext);

  const onSubmit = event => {
    event.preventDefault();
    onLogin();
    history.push('/');
  };

  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      {!isLoggedIn && (
        <Container className="pt-5">
          <Row className="justify-content-center">
            <Col xs lg="6">
              <h1 className="h3 text-center mb-3">Please, log in to build your own burger;)</h1>
              <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We&apos;ll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
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

export default Login;
