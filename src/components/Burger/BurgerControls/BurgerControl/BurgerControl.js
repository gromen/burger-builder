import React from 'react';
import classes from './BurgerControl.module.css';

const BurgerControl = ({ label, added, removed, disabledNote }) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{label}</div>
    <button className={classes.More} onClick={added}>
      more
    </button>
    <button className={classes.Less} disabled={disabledNote} onClick={removed}>
      less
    </button>
  </div>
);

export default BurgerControl;
