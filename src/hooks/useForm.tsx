// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import React, { useState } from 'react';

const useForm = (initialValue = {}) => {
  const [formData, setFormData] = useState(initialValue);

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
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
