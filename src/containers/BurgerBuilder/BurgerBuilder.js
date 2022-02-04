import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../../axios-orders';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';
import Modal from '../../components/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/Spinner/Spinner';
import WithErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import INGREDIENT_PRICES from '../../utils/ingredientPrices';

const BurgerBuilder = () => {
  const [ingredients, setIngredients] = useState({ });
  const [totalPrice, setTotalPrice] = useState(0);
  const [canPurchase, setCanPurchase] = useState(false);
  const [purchasing, setPurchasing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { history } = useHistory();

  useEffect(() => {
    setLoading(true);
    axios.get('/ingredients.json')
      .then(response => {
        setIngredients(response.data);
        setLoading(false);
      })
      .catch(errorData => { setError(true); });
  }, []);

  const ingredientAdd = type => {
    const countOld = ingredients[type];
    const countUpdated = countOld + 1;
    const ingredientsUpdated = { ...ingredients, };

    ingredientsUpdated[type] = countUpdated;

    const ingredientPrice = INGREDIENT_PRICES[type];
    const newPrice = parseFloat(ingredientPrice + totalPrice).toFixed(2);

    setIngredients(ingredientsUpdated);
    setTotalPrice(Number(newPrice));

    updatePurchaseState(ingredientsUpdated);
  };

  const ingredientRemove = type => {
    const countOld = ingredients[type];
    const countUpdated = countOld - 1;
    const ingredientPrice = INGREDIENT_PRICES[type];
    const newPrice = parseFloat((totalPrice - ingredientPrice).toFixed(2));

    ingredients[type] = countUpdated;
    setIngredients(prevIngredients => ({ ...prevIngredients, ...ingredients }));
    setTotalPrice(newPrice);
    updatePurchaseState(ingredients);
  };

  const updatePurchaseState = ingredientsUpdated => {
    setCanPurchase(Object.values(ingredientsUpdated).some(value => value));
  };

  const purchase = () => setPurchasing(true);

  const purchaseCancel = () => setPurchasing(false);

  const purchaseContinue = () => {
    const queryParams = [];

    for (const i in ingredients) {
      queryParams.push(`${encodeURIComponent(i)}=${encodeURIComponent(ingredients[i])}`);
      queryParams.push(`price=${totalPrice}`);

      const queryString = queryParams.join('&');

      // TODO history is undefined - to fix
      // history.push({
      //   pathname: '/checkout',
      //   search: `?${queryString}`,
      // });
    }
  };

  const disabledNote = { ...ingredients };

  for (const key in disabledNote) {
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
      {ingredients && !loading && <Burger ingredients={ingredients} hasError={error} />}
      {loading && <Spinner />}
      {ingredients && (
      <BurgerControls
        ingredientAdded={ingredientAdd}
        ingredientRemoved={ingredientRemove}
        disabled={disabledNote}
        totalPrice={totalPrice}
        canPurchase={!canPurchase}
        onClickOrder={purchase}
      />
      )}
    </>
  );
};

export default WithErrorHandler(BurgerBuilder, axios);
