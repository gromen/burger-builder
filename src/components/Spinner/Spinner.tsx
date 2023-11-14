import classes from './Spinner.module.css';

function spinner(): JSX.Element {
  return <div className={classes.Loader} />;
}

export default spinner;
