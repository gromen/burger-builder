import { useState } from "react";

export const useForm = (initialValue = {}) => {
  const [formData, setFormData] = useState(initialValue);

  const inputChangeHandler = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return { formData, inputChangeHandler };
};
