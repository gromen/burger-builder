import React from 'react';

interface PropsInput {
  name: string;
}

function Input({ name }: PropsInput): JSX.Element | null {
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
