import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

function Checkout(props) {
  const [ingredients, setIngredients] = useState({});

  useEffect(() => {
    const query = new URLSearchParams(props.location.search);
    const ingredients = {};
    for (let param of query.entries()) {
      // ['salad', '1']
      ingredients[param[0]] = +param[1];
    }
    setIngredients(ingredients);
    // eslint-disable-next-line
  }, []);

  function onCheckoutCancelledHandler() {
    props.history.goBack();
  }

  function onCheckoutSucceedHandler() {
    props.history.replace("/checkout/contact-data");
  }

  return (
    <div>
      <CheckoutSummary
        ingredients={ingredients}
        onCheckoutCancelled={onCheckoutCancelledHandler}
        onCheckoutSucceed={onCheckoutSucceedHandler}
      />
      <Route
        path={`${props.match.path}/contact-data`}
        render={(props) => <ContactData ingredients={ingredients} {...props} />}
      />
    </div>
  );
}

export default Checkout;
