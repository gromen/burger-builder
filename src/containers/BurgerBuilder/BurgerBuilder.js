import React, { useState, useEffect } from 'react';
import Aux from '../../hoc/Aux/Aux';
import axios from '../../axios-orders';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';
import Modal from '../../components/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/Spinner/Spinner';
import WithErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
  meat: 2,
  salad: 0.5,
  chesse: 1,
  onion: 0.4,
  bacon: 0.9,
};

const BurgerBuilder = props => {
  const [ingredients, setIngredients] = useState({ });
  const [totalPrice, setTotalPrice] = useState('');
  const [canPurchase, setCanPurchase] = useState(false);
  const [purchasing, setPurchasing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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
    if (countUpdated < 0) return;
    const ingredientsUpdated = { ingredients };

    ingredientsUpdated[type] = countUpdated;

    const ingredientPrice = INGREDIENT_PRICES[type];
    const newPrice = parseFloat((totalPrice - ingredientPrice).toFixed(2));

    setIngredients(ingredientsUpdated);
    setTotalPrice(Number(newPrice));
    updatePurchaseState(ingredientsUpdated);
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

      props.history.push({
        pathname: '/checkout',
        search: `?${queryString}`,
      });
    }
  };

  useEffect(() => {

  }, [error]);

  // const disabledNote = { ingredients };
  //
  // for (const key in disabledNote) {
  //   disabledNote[key] = disabledNote[key] <= 0;
  // }

  // let burger = error ? (
  //   <p style={{ marginTop: '50px', textAlign: 'center' }}>
  //     ingredients can&apos;t be loaded
  //   </p>
  // ) : <Spinner />;

  return (
    <Aux>
      <Modal modalClose={purchaseCancel} show={purchasing}>
        {!loading && (
          <OrderSummary
            ingredients={ingredients}
            purchaseCancelled={purchaseCancel}
            purchaseProceed={purchaseContinue}
            price={totalPrice}
          />
				)}
      </Modal>
      {ingredients && !loading && <Burger ingredients={ingredients} error={error} />}
      {loading && <Spinner />}
      {ingredients && (
        <BurgerControls
          ingredientAdded={ingredientAdd}
          ingredientRemoved={ingredientRemove}
          disabled={false}
          totalPrice={totalPrice}
          canPurchase={!canPurchase}
          order={purchase}
        />
			)}
    </Aux>
  );
};

export default WithErrorHandler(BurgerBuilder, axios);