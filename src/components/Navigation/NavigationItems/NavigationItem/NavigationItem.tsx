import { type ReactChildren } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.module.css';

interface PropsNavigationItem {
  link: string;
  children: ReactChildren | string;
  end?: boolean | undefined;
}

function navigationItem({
  link,
  children,
  end
}: PropsNavigationItem): JSX.Element {
  return (
    <li className={classes.NavigationItem}>
      <NavLink
        className={({ isActive }) => (isActive ? classes.active : '')}
        end={end}
        to={link}
      >
        {children}
      </NavLink>
    </li>
  );
}

export default navigationItem;
