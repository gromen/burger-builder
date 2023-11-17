'use client';
import { useRef } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
// import { runLogoutTimer } from '@/utils/helpers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { signIn, signOut, useSession } from 'next-auth/react';

export const LoginForm = (): JSX.Element => {
  const { data: session } = useSession();
  const emailFieldRef = useRef<HTMLInputElement>(null);
  const passwordFieldRef = useRef<HTMLInputElement>(null);

  const onToastClose = () => {
    if (emailFieldRef.current && passwordFieldRef.current) {
      emailFieldRef.current.value = '';
      passwordFieldRef.current.value = '';
    }
  };
  // const onClickSwitchAuthMethod = () => {
  //   setIsAuthenticated((prevAuth) => !prevAuth.user);
  // };

  const AuthMethodButtonText = (): JSX.Element => (
    <>
      <Button
        className="w-100 mb-2"
        variant="primary"
        type="submit"
        onClick={() => (session?.user ? signOut() : signIn())}
      >
        {session?.user ? 'Sign out' : 'Sign in'}
      </Button>
      <Form.Text style={{ display: 'inline-block' }}>
        {session?.user
          ? "Don't have an account ? "
          : 'Already have an account ? '}
      </Form.Text>
      <Button variant="link" className="text-dark p-0 pl-1 btn-out">
        <small className="text-danger">
          {session?.user ? 'Sign in' : 'Sign out'}
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
            {session?.user ? 'Log out' : 'Login up'}
          </h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                // required
                ref={emailFieldRef}
                type="email"
                placeholder="Enter email address"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                // required
                ref={passwordFieldRef}
                type="password"
                placeholder="Enter password"
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

export default LoginForm;
