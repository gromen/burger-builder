import PropTypes from 'prop-types';
import React, { useState, createContext, useEffect } from 'react';

const AuthContext = createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInfo = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedInInfo === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const onLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  const onLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, onLogout: onLogout, onLogin: onLogin }}
      >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};
