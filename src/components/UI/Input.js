import React from 'react';

function Input({ name }) {
  let inputElement = null;

  switch (name) {
    case 'text':
      inputElement = <input name={name} type="text" />;
      break;

    default:
      break;
  }

  return inputElement;
}

export default Input;
