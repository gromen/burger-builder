import React, { type ReactChildren, type ReactElement } from 'react';
import classes from '@/components/Modal/Modal.module.css';
import Backdrop from '@/components/Backdrop/Backdrop';

interface PropsModal {
  show: boolean;
  modalClose: () => void;
  children: ReactChildren | ReactElement;
}

function Modal({ show, modalClose, children }: PropsModal): JSX.Element {
  return (
    <>
      <Backdrop clicked={modalClose} show={show} />
      <div
        className={classes.Modal}
        style={{ transform: show ? 'translateY(0)' : 'translateY(-1000px)' }}
      >
        {children}
      </div>
    </>
  );
}

export default React.memo(Modal);
