import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from '../../axios-orders';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';
import Modal from '../../components/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/Spinner/Spinner';
import WithErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import {
  setIngredients,
  setTotalPrice,
  // updatePurchase,
  canPurchase as isPurchaseAvailable
} from '../../store/ducks/burgerBuilder/slice';
import INGREDIENT_PRICES from '../../utils/ingredientPrices';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-toolkit';
import { useIngredients } from '../../hooks/useIngredients';

const BurgerBuilder = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const ingredients = useAppSelector(
    (state) => state.burgerBuilderState.ingredients
  );
  const totalPrice = useAppSelector(
    (state) => state.burgerBuilderState.totalPrice
  );
  const canPurchase = useAppSelector(
    (state) => state.burgerBuilderState.canPurchase
  );
  const [purchasing, setPurchasing] = useState(false);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const [loading, error, data] = useIngredients<Ingredients>([]);

  useEffect(() => {
    if (data != null) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      dispatch(setIngredients(data));
    }
  }, [data]);

  const ingredientAdd = (type: string | number): void => {
    const countOld = ingredients[type];
    const countUpdated = countOld + 1;
    const ingredientPrice = INGREDIENT_PRICES[type];
    const newPrice = parseFloat((totalPrice + ingredientPrice).toFixed(2));
    const ingredientsUpdated = { ...ingredients };

    ingredientsUpdated[type] = countUpdated;

    dispatch(setIngredients(ingredientsUpdated));
    dispatch(setTotalPrice(Number(newPrice)));
    dispatch(
      isPurchaseAvailable(
        Object.values(ingredientsUpdated).every((value) => value === 0)
      )
    );
  };

  const ingredientRemove = (type: string | number): void => {
    const countOld = ingredients[type];
    const countUpdated = countOld - 1;
    const ingredientPrice = INGREDIENT_PRICES[type];
    const newPrice = parseFloat((totalPrice - ingredientPrice).toFixed(2));
    const ingredientsUpdated = { ...ingredients };

    ingredientsUpdated[type] = countUpdated;

    dispatch(setIngredients(ingredientsUpdated));
    dispatch(setTotalPrice(newPrice));
    dispatch(
      isPurchaseAvailable(
        Object.values(ingredientsUpdated).every((value) => value === 0)
      )
    );
  };

  const purchase = (): void => {
    setPurchasing(true);
  };

  const purchaseCancel = (): void => {
    setPurchasing(false);
  };

  const purchaseContinue = (): void => {
    const queryParams = [];

    for (const i in ingredients) {
      queryParams.push(
        `${encodeURIComponent(i)}=${encodeURIComponent(ingredients[i])}`
      );
      queryParams.push(`price=${totalPrice}`);

      const queryString = queryParams.join('&');

      navigate({ pathname: '/checkout', search: `?${queryString}` });
    }
  };

  const disabledNote = { ...ingredients };

  for (const key in disabledNote) {
    // @ts-expect-error problem with fix
    disabledNote[key] = disabledNote[key] <= 0;
  }

  return (
    <>
      <Modal modalClose={purchaseCancel} show={purchasing}>
        <OrderSummary
          ingredients={ingredients}
          purchaseCancelled={purchaseCancel}
          purchaseProceed={purchaseContinue}
          price={totalPrice}
        />
      </Modal>
      {loading != null && <Burger ingredients={ingredients} hasError={error} />}
      {loading == null && <Spinner />}
      <BurgerControls
        ingredientAdded={ingredientAdd}
        ingredientRemoved={ingredientRemove}
        // @ts-expect-error TODO refactor disabled[disabledNote] to meet ts requirements
        disabled={disabledNote}
        canPurchase={canPurchase}
        onClickOrder={purchase}
      />
    </>
  );
};

export default WithErrorHandler(BurgerBuilder, axios);
