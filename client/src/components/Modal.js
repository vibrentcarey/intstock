import React from 'react';
import close from '../assets/close-24px.svg'
import './Modal.css'
import PropTypes from 'prop-types';

const Modal = (props) => {
  return (
    <div className='backdrop'>
      <section className='modal'>
        {/* TODO: Make this Dynamic */}
        <img onClick={props.onClose} className="modal__image" src={close} alt='close' />
        <h1 className='modal__title'>{props.title}</h1>
        <p className='modal__message'>{props.message}</p>
      </section>
    </div>
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default Modal;