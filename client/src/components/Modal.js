import React from 'react';
import close from '../assets/close-24px.svg'
import './Modal.css'

const Modal = (props) => {
  return (
    <div className='backdrop'>
      <section className='modal'>
        {/* TODO: Make this Dynamic */}
        <img onClick={props.oncClick} className="modal__image" src={close} alt='close'/>
        <h1 className='modal__title'>{props.title}</h1>
        <p className='modal__message'>{props.message}</p>
      </section>
    </div>
  );
};

export default Modal;