import React, { Component } from "react";
import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";
import Aux from "../../hoc/Aux/Aux";

class Modal extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }

  render() {
    const { show, modalClose, children } = this.props;
    return (
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
  }
}

export default Modal;
