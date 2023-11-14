import classes from './Header.module.css';
import Navigation from '@/components/Navigation/Navigation';
import Logo from '@/components/Logo/Logo';

interface PropsHeader {
  clickedLogo: () => void;
  openedSideDrawer: boolean;
}

function Header({ clickedLogo, openedSideDrawer }: PropsHeader): JSX.Element {
  return (
    <header className={classes.Header}>
      <button
        type="button"
        className={classes.ButtonToggler}
        onClick={clickedLogo}
      >
        Menu
      </button>
      <div className={classes.Logo}>
        <Logo openedSideDrawer={openedSideDrawer} />
      </div>
      <Navigation />
    </header>
  );
}

export default Header;
