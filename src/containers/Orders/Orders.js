import { useState, useEffect } from "react";
import axios from "../../axios-orders";

function Orders() {
  const [orders, setOrders] = useState({});

  useEffect(() => {
    axios
      .get("/orders.json")
      .then((response) => {
        setOrders(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div>sasa</div>;
}

export default Orders;
