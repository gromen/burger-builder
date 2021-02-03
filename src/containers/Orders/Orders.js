import { useState, useEffect } from "react";
import axios from "../../axios-orders";
import Container from "react-bootstrap/Container";

import Spinner from "../../components/Spinner/Spinner";
import Order from "../../components/Order/Order";
import WithErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

function Orders() {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setLoading(true);

    axios
      .get("/orders.json")
      .then((response) => {
        const fetchedOrders = [];

        for (const key in response.data) {
          fetchedOrders.push({ ...response.data[key], id: key });
        }

        setLoading(false);
        setOrders(fetchedOrders);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  let order = !loading ? (
    orders.map((order) => (
      <Order key={order.id} ingredients={order.ingredients} price={+order.price} orderDate={order.orderDate} />
    ))
  ) : (
    <Spinner />
  );

  return <Container className='mt-4'>{order}</Container>;
}

export default WithErrorHandler(Orders, axios);
