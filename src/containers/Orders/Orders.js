import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import axios from '../../axios-orders';

import Spinner from '../../components/Spinner/Spinner';
import Order from '../../components/Order/Order';
import WithErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

function Orders() {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setLoading(true);

    axios
      .get('/orders.json')
      .then(response => {
        const fetchedOrders = [];

        for (const key in response.data) {
          fetchedOrders.push({
            ...response.data[key],
            id: key
          });
        }

        setLoading(false);
        setOrders(fetchedOrders);
      })
      .catch(error => {
        setLoading(false);
        console.error(error);
      });
  }, []);

  const order = !loading
    ? orders.map(orderItem => (
      <Order
        ingredients={orderItem.ingredients} key={orderItem.id}
        orderDate={orderItem.orderDate} price={+orderItem.price}
      />
    ))
    : <Spinner />;

  return <Container className="mt-4">{order}</Container>;
}

export default WithErrorHandler(Orders, axios);
