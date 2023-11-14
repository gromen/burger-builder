// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import CheckoutSummary from '@/components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

function Checkout() {
  const [ingredients, setIngredients] = useState({});
  const [price, setPrice] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const ingredientElements = {};

    for (const param of query.entries()) {
      if (param[0] === 'price') setPrice(price + param[1]);
      else ingredientElements[param[0]] = +param[1];
    }

    setIngredients(ingredientElements);
  }, []);

  function onCheckoutCancelledHandler() {
    navigate(-1);
  }

  // eslint-disable-next-line
  function onCheckoutSucceedHandler() {
    navigate('/checkout/contact-data', { replace: true });
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
  price: 0.0
};
