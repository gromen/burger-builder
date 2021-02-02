import classes from "./Backdrop.module.css";

function backdrop({ clicked, children, show }) {
  return show ? (
    <div className={classes.Backdrop} onClick={clicked}>
      {children}
    </div>
  ) : null;
}

export default backdrop;
