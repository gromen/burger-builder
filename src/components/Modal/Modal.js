import React from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../hoc/Aux/Aux';

function Modal({ show, modalClose, children }) {
  return (
    <Aux>
      <Backdrop clicked={modalClose} show={show} />
      <div
        className={classes.Modal}
        style={{
					transform: show ? 'translateY(0)' : 'translateY(-1000px)',
				}}
      >
        {children}
      </div>
    </Aux>
  );
}

export default React.memo(Modal);
