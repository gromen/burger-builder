import React, { type FormEvent, useRef, useState } from 'react';
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import { runLogoutTimer } from '../../utils/helpers';
import { userAuthActions } from '../../store/ducks/user/slice';
import { useAppDispatch } from '../../hooks/redux-toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';
import { auth } from '../../firebase/fireabseConfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const LoginPage = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const emailFieldRef = useRef<HTMLInputElement>(null);
  const passwordFieldRef = useRef<HTMLInputElement>(null);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const onToastClose = () => {
    setIsLogin(true);

    if (emailFieldRef.current && passwordFieldRef.current) {
      emailFieldRef.current.value = '';
      passwordFieldRef.current.value = '';
    }
  };

  const onSubmit = (event: FormEvent): void => {
    event.preventDefault();
    setIsLoading(true);

    const emailEntered = emailFieldRef.current?.value as string;
    const passwordEntered = passwordFieldRef.current?.value as string;

    if (isLogin) {
      signInWithEmailAndPassword(auth, emailEntered, passwordEntered)
        .then((userCredential) => {
          const user = userCredential.user;

          // const timeToLogout = new Date(new Date().getTime() + +expiresIn * 1000);
          dispatch(
            // @ts-expect-error sasa
            userAuthActions.login({ idToken: user.accessToken })
          );
          // runLogoutTimer(dispatch, timeToLogout);
          navigate('/');
        })
        .catch((error) => {
          toast.error(error.message);
          console.error(error.code);
          console.error(error.message);
          setIsLoading(false);
        });
      return;
    }

    createUserWithEmailAndPassword(auth, emailEntered, passwordEntered)
      .then(() => {
        toast.success('Account created successfully!', {
          onClose: () => onToastClose()
        });
      })
      .catch((error) => {
        toast.error(error.message);
        console.error(error.code);
        console.error(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onClickSwitchAuthMethod = (): void => {
    setIsLogin((prevState) => !prevState);
  };

  const AuthMethodButtonText = (): JSX.Element => (
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
        {isLogin ? 'Login' : 'Create Account'}
      </Button>
      <Form.Text style={{ display: 'inline-block' }}>
        {isLogin ? "Don't have an account ? " : 'Already have an account ? '}
      </Form.Text>
      <Button
        variant="link"
        className="text-dark p-0 pl-1 btn-out"
        onClick={onClickSwitchAuthMethod}
      >
        <small className="text-danger">
          {isLogin ? 'Register now.' : 'Log in'}
        </small>
      </Button>
      <Form.Text className="mt-4 text-muted">
        login: test@example.pl <br /> password: test@example.pl
      </Form.Text>
    </>
  );

  return (
    <Container className="pt-5">
      <Row className="justify-content-center">
        <Col xs lg="6">
          <h1 className="h3 text-center mb-3">
            {isLogin ? 'Sign in' : 'Sign up'}
          </h1>
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                ref={emailFieldRef}
                type="email"
                placeholder="Type 'user@test.com'"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                ref={passwordFieldRef}
                type="password"
                placeholder="Type 'user.TestCom.At'"
                // pattern="^(?=.*[a-z])(?=.*[A-Z]).{8,}$"
              />
            </Form.Group>
            <AuthMethodButtonText />
          </Form>
        </Col>
      </Row>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        style={{ width: '100%', maxWidth: '400px' }}
      />
    </Container>
  );
};

export default LoginPage;
