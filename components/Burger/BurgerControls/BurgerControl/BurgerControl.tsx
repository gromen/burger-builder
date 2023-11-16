import classes from './BurgerControl.module.css';

interface PropsBurgerControl {
  label: string;
  added: () => void;
  removed: () => void;
  disabledNote: object;
}

const BurgerControl = ({
  label,
  added,
  removed,
  disabledNote
}: PropsBurgerControl): JSX.Element => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{label}</div>
    <button
      type="button"
      className={classes.More}
      onClick={added}
      title={`Add ${label} ingredient`}
    >
      &#43;
    </button>

    <button
      type="button"
      className={classes.Less}
      disabled={Boolean(disabledNote)}
      onClick={removed}
      title={`Remove ${label} ingredient`}
    >
      &minus;
    </button>
  </div>
);

export default BurgerControl;
