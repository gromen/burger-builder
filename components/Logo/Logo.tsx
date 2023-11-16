import logoImg from '@/public/images/burger-logo.png';
import classes from './Logo.module.css';
import Image from 'next/image';

interface PropsLogo {
  openedSideDrawer?: boolean;
}

function logo({ openedSideDrawer }: PropsLogo): JSX.Element {
  return (
    <div className={classes.Logo}>
      <Image
        alt="logo burger"
        src={logoImg}
        width={100}
        height={100}
        style={{
          transform:
            openedSideDrawer == null ? 'rotateZ(-180deg)' : 'rotateZ(0deg)'
        }}
      />
    </div>
  );
}

export default logo;
