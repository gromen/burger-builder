import { type ReactNode } from 'react';
import classes from '@/components/UI/Button/Button.module.css';

interface PropsButton {
  children: ReactNode;
  clicked: () => void;
  btnType: 'Success' | 'Danger';
  disabled?: boolean;
}

function Button({
  children,
  clicked,
  btnType,
  disabled
}: PropsButton): JSX.Element {
  return (
    <button
      type="button"
      className={[classes.Button, classes[btnType]].join(' ')}
      onClick={clicked}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
