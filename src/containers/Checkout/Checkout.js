import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Route, useHistory, useLocation } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

function Checkout() {
  const [ingredients, setIngredients] = useState({});
  const [price, setPrice] = useState(0);
  const location = useLocation();
  const history = useHistory();

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
      <CheckoutSummary ingredients={ingredients} />
      <ContactData
        ingredients={ingredients}
        price={parseFloat(price)}
        onCheckoutCancelled={onCheckoutCancelledHandler}
      />
    </div>
  );
}

export default Checkout;

Checkout.defaultProps = {
  price: 0.00
};
