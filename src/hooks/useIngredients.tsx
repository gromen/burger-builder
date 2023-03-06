import { useState, useEffect } from 'react';
import axios from '../axios-orders';

export const useIngredients = (initialValue = []): any => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(initialValue);
  const [error, setError] = useState(false);

  const fetchIngredients = async (): Promise<any> => {
    setLoading(true);

    try {
      const response = await axios.get('/ingredients.json');
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchIngredients();
  }, []);

  return [loading, error, data, fetchIngredients] as const;
};
