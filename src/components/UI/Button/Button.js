import React from 'react';
import classes from './Button.module.css';

function button({ children, clicked, btnType }) {
  return (
    <button type="button" className={[classes.Button, classes[btnType]].join(' ')} onClick={clicked}>
      {children}
    </button>
  );
}

export default button;
