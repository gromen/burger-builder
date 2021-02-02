import React from "react";

import Navigation from "../Navigation";
import Logo from "../../Logo/Logo";
import classes from "./SideDrawer.module.css";
import Backdrop from "../../Backdrop/Backdrop";
import Aux from "../../../hoc/Aux/Aux";

function sideDrawer({ opened, closed }) {
  return (
    <Aux>
      <Backdrop show={opened} clicked={closed} />
      <div className={`${classes.SideDrawer} ${opened ? classes.Open : classes.Close}`}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <Navigation />
      </div>
    </Aux>
  );
}

export default sideDrawer;
