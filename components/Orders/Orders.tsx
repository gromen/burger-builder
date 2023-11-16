'use client';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import axios from '@/axios-orders';
import Spinner from '@/components/Spinner/Spinner';
import Order from '@/components/Order/Order';
import WithErrorHandler from '@/hoc/withErrorHandler/withErrorHandler';
import { Ingredients } from '@/utils/ingredientPrices';

export interface Order {
  id: string;
  ingredients: Ingredients;
  orderDate: Date;
  price: string;
}

function Orders() {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    async function fetchOrders() {
      try {
        setLoading(true);
        const response = await axios.get('/orders.json');
        if (!response) {
          throw new Error('No response from server');
        }
        const fetchedOrders: Order[] = Object.entries(response).map(
          ([id, order]) => ({
            ...order,
            id
          })
        );

        setOrders(fetchedOrders);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchOrders();
  }, []);

  const order = !loading ? (
    orders.map((orderItem) => (
      <Order
        ingredients={orderItem.ingredients}
        key={orderItem.id}
        orderDate={orderItem.orderDate}
        price={+orderItem.price}
      />
    ))
  ) : (
    <Spinner />
  );

  return <Container className="mt-4">{order}</Container>;
}

export default WithErrorHandler(Orders, axios);
