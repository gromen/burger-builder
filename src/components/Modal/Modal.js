import PropTypes from 'prop-types';
import React from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

function Modal({ show, modalClose, children }) {
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

Modal.propTypes = {
  show: PropTypes.bool,
  modalClose: PropTypes.func.isRequired,
  children: PropTypes.node
};

Modal.defaultProps = {
  show: null,
  children: null
};
