import React from "react";
import classes from "./Header.module.css";
import Navigation from "../Navigation";
import Logo from "../../Logo/Logo";

const toolbar = ({ clickedLogo, openedSideDrawer }) => (
  <header className={classes.Header}>
    <div className={classes.Logo} onClick={clickedLogo}>
      <Logo openedSideDrawer={openedSideDrawer} />
    </div>
    <Navigation />
  </header>
);

export default toolbar;
