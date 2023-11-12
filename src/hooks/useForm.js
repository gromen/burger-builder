/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useState } from 'react';

const useForm = (initialValue = {}) => {
  const [formData, setFormData] = useState(initialValue);

  const inputChangeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  return {
    formData,
    inputChangeHandler
  };
};

export default useForm;
