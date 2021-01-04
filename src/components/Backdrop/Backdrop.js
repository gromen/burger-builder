import React from "react";
import classes from "./Backdrop.module.css";

const backdrop = ({ show, children, clicked }) =>
  show ? (
    <div className={classes.Backdrop} onClick={clicked}>
      {children}
    </div>
  ) : null;

export default backdrop;
