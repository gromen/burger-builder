import React, {
  useState, useEffect, useReducer
} from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../../axios-orders';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';
import Modal from '../../components/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/Spinner/Spinner';
import WithErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import INGREDIENT_PRICES from '../../utils/ingredientPrices';
import { burgerBuilderReducer, initialState } from '../../store/reducers/burgerBuilder.reducer';
import { burgerBuilderActionTypes } from '../../store/actions/burgerBuilder.actionTypes';

const BurgerBuilder = () => {
  const [state, dispatch] = useReducer(burgerBuilderReducer, initialState);
  const [purchasing, setPurchasing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setLoading(true);

    axios.get('/ingredients.json')
      .then(response => {
        dispatch({
          type: burgerBuilderActionTypes.SET_INGREDIENTS,
          payload: response.data
        });
        setLoading(false);
      })
      .catch(errorData => { setError(true); });
  }, []);

  const ingredientAdd = type => {
    const countOld = state.ingredients[type];
    const countUpdated = countOld + 1;
    const ingredientsUpdated = { ...state.ingredients, };

    ingredientsUpdated[type] = countUpdated;

    const ingredientPrice = INGREDIENT_PRICES[type];
    const newPrice = parseFloat(ingredientPrice + state.totalPrice).toFixed(2);

    dispatch({
      type: burgerBuilderActionTypes.SET_INGREDIENTS,
      payload: ingredientsUpdated
    });
    dispatch({
      type: burgerBuilderActionTypes.SET_TOTAL_PRICE,
      payload: Number(newPrice)
    });
    dispatch({
      type: burgerBuilderActionTypes.UPDATE_PURCHASE,
      payload: ingredientsUpdated
    });
  };

  const ingredientRemove = type => {
    const countOld = state.ingredients[type];
    const countUpdated = countOld - 1;
    const ingredientPrice = INGREDIENT_PRICES[type];
    const newPrice = parseFloat((state.totalPrice - ingredientPrice).toFixed(2));

    state.ingredients[type] = countUpdated;
    dispatch({
      type: burgerBuilderActionTypes.SET_INGREDIENTS,
      payload: state.ingredients
    });
    dispatch({
      type: burgerBuilderActionTypes.SET_TOTAL_PRICE,
      payload: newPrice
    });
    dispatch({
      type: burgerBuilderActionTypes.UPDATE_PURCHASE,
      payload: state.ingredients
    });
  };

  const purchase = () => setPurchasing(true);

  const purchaseCancel = () => setPurchasing(false);

  const purchaseContinue = () => {
    const queryParams = [];

    for (const i in state.ingredients) {
      queryParams.push(`${encodeURIComponent(i)}=${encodeURIComponent(state.ingredients[i])}`);
      queryParams.push(`price=${state.totalPrice}`);

      const queryString = queryParams.join('&');

      history.push({
        pathname: '/checkout',
        search: `?${queryString}`,
      });
    }
  };

  const disabledNote = { ...state.ingredients };

  for (const key in disabledNote) {
    disabledNote[key] = disabledNote[key] <= 0;
  }

  return (
    <>
      <Modal modalClose={purchaseCancel} show={purchasing}>
        <OrderSummary
          ingredients={state.ingredients}
          purchaseCancelled={purchaseCancel}
          purchaseProceed={purchaseContinue}
          price={state.totalPrice}
        />
      </Modal>
      {state.ingredients && !loading && <Burger ingredients={state.ingredients} hasError={error} />}
      {loading && <Spinner />}
      {state.ingredients && (
      <BurgerControls
        ingredientAdded={ingredientAdd}
        ingredientRemoved={ingredientRemove}
        disabled={disabledNote}
        totalPrice={state.totalPrice}
        canPurchase={!state.canPurchase}
        onClickOrder={purchase}
      />
      )}
    </>
  );
};

export default WithErrorHandler(BurgerBuilder, axios);
