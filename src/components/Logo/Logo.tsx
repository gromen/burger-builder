import logoImg from '@/assets/images/burger-logo.png';
import classes from './Logo.module.css';

interface PropsLogo {
  openedSideDrawer?: boolean;
}

function logo({ openedSideDrawer }: PropsLogo): JSX.Element {
  return (
    <div className={classes.Logo}>
      <img
        alt="logo burger"
        src={logoImg}
        style={{
          transform:
            openedSideDrawer == null ? 'rotateZ(-180deg)' : 'rotateZ(0deg)'
        }}
      />
    </div>
  );
}

export default logo;
