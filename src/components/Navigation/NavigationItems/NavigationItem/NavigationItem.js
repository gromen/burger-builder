import classes from "./NavigationItem.module.css";

function navigationItem({ active, link, children }) {
  return (
    <li className={classes.NavigationItem}>
      <a className={active ? classes.active : null} href={link}>
        {children}
      </a>
    </li>
  );
}

export default navigationItem;
