import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import AuthContext from '../../store/auth-context';

const PrivateRoute = ({ path, children, redirectTo }) => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Route
      path={path}
      render={() => (
        isLoggedIn ? children : <Redirect to={redirectTo} />
      )}
    />
  );
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  redirectTo: PropTypes.string.isRequired
};
