'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import CheckoutSummary from '@/components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '@/components/Checkout/ContactData/ContactData';
import { Ingredients } from '@/utils/ingredientPrices';
import { useAppDispatch } from '@/hooks/redux-toolkit';
import { setTotalPrice } from '@/store/ducks/burgerBuilder/slice';

function Checkout() {
  const [ingredients, setIngredients] = useState({});
  const [price, setPrice] = useState(0);
  const router = useRouter();
  const params = useSearchParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const ingredientsFromUrl: Ingredients = {};

    for (const param of new URLSearchParams(params)) {
      const [key, value] = param;
      if (key === 'price') setPrice(+value);
      else ingredientsFromUrl[key] = +value;
    }

    setIngredients(ingredientsFromUrl);
  }, []);

  function onCheckoutCancelledHandler() {
    dispatch(setTotalPrice(0));
    router.back();
  }

  function onCheckoutSucceedHandler() {
    router.push('/checkout/contact-data');
  }

  return (
    <div>
      <CheckoutSummary ingredients={ingredients} />
      <ContactData
        ingredients={ingredients}
        price={parseFloat(price.toString())}
        onCheckoutCancelled={onCheckoutCancelledHandler}
      />
    </div>
  );
}

export default Checkout;
