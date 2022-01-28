import React, { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import NavigationItems from './NavigationItems/NavigationItems';

function Navigation() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      {isLoggedIn && (
        <nav>
          <NavigationItems />
        </nav>
      )}
    </>
  );
}

export default Navigation;
