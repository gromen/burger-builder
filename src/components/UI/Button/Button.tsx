import React from 'react';
import classes from './Button.module.css';
interface PropsButton {
  children: ChildNode;
  clicked: () => void;
  btnType: string;
}

function button({ children, clicked, btnType }: PropsButton): JSX.Element {
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

export default button;
