import React, { useRef } from 'react';
import {
  Button, Col, Container, Form, Row
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FIREBASE_UPDATE_PASSWORD } from '../../utils/endpoints';

const UserProfilePage = () => {
  const idToken = useSelector(state => state.userAuthState.userAuth.idToken);
  const passwordFieldRef = useRef();
  const history = useHistory();

  let enteredNewPassword = passwordFieldRef.current;

  const onSubmit = event => {
    event.preventDefault();
    enteredNewPassword = passwordFieldRef?.current?.value;

    fetch(FIREBASE_UPDATE_PASSWORD, {
      method: 'POST',
      body: JSON.stringify({
        idToken,
        password: enteredNewPassword,
        returnSecureToken: false
      }),
      headers: {
        'Content-type': 'application/json'
      }
    }).then(response => {
      history.replace('/');
    });
  };

  return (
    <Container className="pt-5">
      <Row className="justify-content-center">
        <Col xs lg="6">
          <h1>User Profile</h1>
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                ref={passwordFieldRef}
                required
                type="password"
                placeholder="Password"
                pattern="^(?=.*[a-z])(?=.*[A-Z]).{8,}$"
                aria-describedby="passwordHint"
              />
              <Form.Text id="passwordHint" muted>
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
              Change password
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfilePage;
