import React, { useRef, useState } from 'react';
import {
  Button, Col, Container, Form, Row, Spinner,
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { runLogoutTimer } from '../../utils/helpers';
import { userAuthActions } from '../../store/ducks/user/slice';
import { FIREBASE_SIGN_IN_WITH_PASSWORD, FIREBASE_SIGN_UP } from '../../utils/endpoints';

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const emailFieldRef = useRef();
  const passwordFieldRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = event => {
    event.preventDefault();
    setIsLoading(true);

    const url = isLogin ? FIREBASE_SIGN_IN_WITH_PASSWORD : FIREBASE_SIGN_UP;

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: emailFieldRef.current.value,
        password: passwordFieldRef.current.value,
        returnSecureToken: true
      }),
      headers: {
        'Content-type': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        setIsLoading(false);

        return response.json();
      } else {
        setIsLoading(false);

        return response.json().then(() => {
          throw new Error('Authentication failed');
        });
      }
    }).then(data => {
      const { idToken, expiresIn } = data;

      const timeToLogout = new Date(new Date().getTime() + (+expiresIn * 1000));

      dispatch(userAuthActions.login({ idToken }));
      runLogoutTimer(dispatch, timeToLogout);
      history.push('/');
      navigate('/');
    }).catch(error => console.error(error.message));
  };

  const onClickSwitchAuthMethod = () => setIsLogin(prevState => !prevState);

  const AuthMethodButtonText = () => (
    <>
      <Button className="w-100 mb-2" variant="primary" type="submit">
        {isLoading && (
        <Spinner
          className="mr-2"
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />
				)}
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
						? 'Register now.'
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
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                ref={emailFieldRef}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                ref={passwordFieldRef}
                type="password"
                placeholder="Password"
                // pattern="^(?=.*[a-z])(?=.*[A-Z]).{8,}$"
              />

            </Form.Group>
            <AuthMethodButtonText />
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
