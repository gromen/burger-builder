import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

function Checkout({ location, match, history }) {
  const [ingredients, setIngredients] = useState({});
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const ingredientElements = {};

    for (const param of query.entries()) {
      if (param[0] === 'price') setPrice(price + param[1]);
      else ingredientElements[param[0]] = +param[1];
    }

    setIngredients(ingredientElements);
    // eslint-disable-next-line
  }, []);

  function onCheckoutCancelledHandler() {
    history.goBack();
  }

  function onCheckoutSucceedHandler() {
    history.replace('/checkout/contact-data');
  }

  return (
    <div>
      <CheckoutSummary
        ingredients={ingredients}
        onCheckoutCancelled={onCheckoutCancelledHandler}
        onCheckoutSucceed={onCheckoutSucceedHandler}
      />
      <Route
        path={`${match.path}/contact-data`}
        render={propsContactData => (
          <ContactData
            ingredients={ingredients} price={parseFloat(price)}
            {...propsContactData}
          />
)}
      />
    </div>
  );
}

export default Checkout;

Checkout.propTypes = {
  price: PropTypes.number,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

Checkout.defaultProps = {
  price: 0.00
};
