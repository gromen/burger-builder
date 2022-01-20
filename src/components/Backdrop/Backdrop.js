import React from 'react';
import classes from './Backdrop.module.css';

function backdrop({ clicked, children, show }) {
  return show
    ? (
      <button type="button" className={classes.Backdrop} onClick={clicked}>
        {children}
      </button>
    )
    : null;
}

export default backdrop;
