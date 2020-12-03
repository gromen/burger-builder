import React from 'react';

import Aux from '../hoc/Aux';

const Layout = (props) => (
  <Aux>
    <header>header</header>
    <main>{ props.children }</main>
    <footer>footer</footer>
    <div>backdrop</div>
  </Aux>
);

export default Layout;