import React from "react";
import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";
import Aux from "../../../hoc/Aux";

const modal = ({ children, show, modalClose }) => (
  <Aux>
    <Backdrop show={show} clicked={modalClose} />
    <div
      className={classes.Modal}
      style={{
        transform: show ? "translateY(0)" : "translateY(-1000px)",
      }}
    >
      {children}
    </div>
    ;
  </Aux>
);

export default modal;
