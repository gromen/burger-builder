import React from "react";
import logoImg from "../../assets/images/burger-logo.png";
import classes from "./Logo.module.css";

function logo({ openedSideDrawer }) {
  return (
    <div className={classes.Logo}>
      <img
        src={logoImg}
        alt='logo burger'
        style={{
          transform: openedSideDrawer ? "rotateZ(-180deg)" : "rotateZ(0deg)",
        }}
      />
    </div>
  );
}

export default logo;
