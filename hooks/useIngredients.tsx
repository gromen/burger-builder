import { useState, useEffect } from 'react';
import axios from '@/axios-orders';

type ResponseIngredients = {
  [key: string]: number;
};

export const useIngredients = (
  initialValue: ResponseIngredients
): [boolean, boolean, ResponseIngredients, () => Promise<void>] => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(initialValue);
  const [error, setError] = useState(false);

  const fetchIngredients = async (): Promise<void> => {
    setLoading(true);

    try {
      const response: ResponseIngredients = await axios.get(
        '/ingredients.json'
      );
      setData(response);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchIngredients();
  }, []);

  return [loading, error, data, fetchIngredients];
};
