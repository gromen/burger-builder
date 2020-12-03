import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from './../../components/Burger/Burger';

class BurgerBuilder extends Component {
  render() {
    return (
      <Aux>
        <p>burger builder cont</p>
        <Burger />
      </Aux>
    )
  }
}

export default BurgerBuilder