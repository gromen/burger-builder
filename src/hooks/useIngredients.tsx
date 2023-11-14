import { useState, useEffect } from 'react';
import axios from '@/axios-orders';

type InitialValue = Array<Record<string, number>>;

export const useIngredients = (
  initialValue: InitialValue
): [boolean, boolean, InitialValue, () => Promise<void>] => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(initialValue);
  const [error, setError] = useState(false);

  const fetchIngredients = async (): Promise<void> => {
    setLoading(true);

    try {
      const response = await axios.get('/ingredients.json');
      setData(response.data);
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
