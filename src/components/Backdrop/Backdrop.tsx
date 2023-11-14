import React from 'react';
import classes from './Backdrop.module.css';

interface PropsBackdrop {
  clicked: () => void;
  children?: ChildNode;
  show: boolean;
}

function backdrop({
  clicked,
  children,
  show
}: PropsBackdrop): JSX.Element | null {
  return show ? (
    <button type="button" className={classes.Backdrop} onClick={clicked}>
      {children}
    </button>
  ) : null;
}

export default backdrop;
