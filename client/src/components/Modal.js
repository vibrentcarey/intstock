import React from 'react';
import './Modal.css'

const Modal = (props) => {
  return (
    <div className='backdrop'>
      <section className='modal'>
        {/* TODO: Make this Dynamic */}
        {props.title}
        <p>{props.message}</p>
      </section>
    </div>
  );
};

export default Modal;