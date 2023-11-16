import { type ReactChildren } from 'react';
import Link from 'next/link';
import classes from './NavigationItem.module.css';

interface PropsNavigationItem {
  link: string;
  children: ReactChildren | string;
}

function navigationItem({ link, children }: PropsNavigationItem): JSX.Element {
  return (
    <li className={classes.NavigationItem}>
      <Link href={link}>{children}</Link>
    </li>
  );
}

export default navigationItem;
