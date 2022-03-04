import React, { useState, useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from '../../axios-orders';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';
import Modal from '../../components/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/Spinner/Spinner';
import WithErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { setIngredients, setTotalPrice, updatePurchase } from '../../store/ducks/burgerBuilder/slice';
import INGREDIENT_PRICES from '../../utils/ingredientPrices';

const BurgerBuilder = () => {
  const dispatch = useDispatch();
  const ingredients = useSelector(state => state.burgerBuilderState.ingredients);
  const totalPrice = useSelector(state => state.burgerBuilderState.totalPrice);
  const canPurchase = useSelector(state => state.burgerBuilderState.canPurchase);

  const [purchasing, setPurchasing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setLoading(true);

    axios.get('/ingredients.json')
      .then(response => {
        dispatch(setIngredients(response.data));
        setLoading(false);
      })
      .catch(errorData => { setError(true); });
  }, [dispatch]);

  const ingredientAdd = type => {
    const countOld = ingredients[type];
    const countUpdated = countOld + 1;
    const ingredientsUpdated = { ...ingredients, };

    ingredientsUpdated[type] = countUpdated;

    const ingredientPrice = INGREDIENT_PRICES[type];
    const newPrice = parseFloat(ingredientPrice + totalPrice).toFixed(2);

    dispatch(setIngredients(ingredientsUpdated));
    dispatch(setTotalPrice(Number(newPrice)));
    dispatch(updatePurchase(ingredientsUpdated));
  };

  const ingredientRemove = type => {
    const countOld = ingredients[type];
    const countUpdated = countOld - 1;
    const ingredientPrice = INGREDIENT_PRICES[type];
    const newPrice = parseFloat((totalPrice - ingredientPrice).toFixed(2));

    ingredients[type] = countUpdated;

    dispatch(setIngredients(ingredients));
    dispatch(setTotalPrice(newPrice));
    dispatch(updatePurchase(ingredients));
  };

  const purchase = () => setPurchasing(true);

  const purchaseCancel = () => setPurchasing(false);

  const purchaseContinue = () => {
    const queryParams = [];

    for (const i in ingredients) {
      queryParams.push(`${encodeURIComponent(i)}=${encodeURIComponent(ingredients[i])}`);
      queryParams.push(`price=${totalPrice}`);

      const queryString = queryParams.join('&');

      history.push({
        pathname: '/checkout',
        search: `?${queryString}`,
      });
    }
  };

  const disabledNote = { ...ingredients };

  for (const key in disabledNote) {
    disabledNote[key] = disabledNote[key] <= 0;
  }

  return (
    <>
      {ingredients && (
      <Modal modalClose={purchaseCancel} show={purchasing}>
        <OrderSummary
          ingredients={ingredients}
          purchaseCancelled={purchaseCancel}
          purchaseProceed={purchaseContinue}
          price={totalPrice}
        />
      </Modal>
      )}
      {ingredients && !loading && <Burger ingredients={ingredients} hasError={error} />}
      {loading && <Spinner />}
      {ingredients && (
      <BurgerControls
        ingredientAdded={ingredientAdd}
        ingredientRemoved={ingredientRemove}
        disabled={disabledNote}
        canPurchase={!canPurchase}
        onClickOrder={purchase}
      />
      )}
    </>
  );
};

export default WithErrorHandler(BurgerBuilder, axios);
