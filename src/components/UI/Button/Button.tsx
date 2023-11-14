import React, { type ReactNode } from 'react';
import classes from './Button.module.css';

interface PropsButton {
  children: ReactNode;
  clicked: () => void;
  btnType: string;
}

function Button({ children, clicked, btnType }: PropsButton): JSX.Element {
  return (
    <button
      type="button"
      className={[classes.Button, classes[btnType]].join(' ')}
      onClick={clicked}
    >
      {children}
    </button>
  );
}

export default Button;
