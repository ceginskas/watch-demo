import React from 'react';
import './styles.scss';

const Modal = props => {
  return (
    <div className="modal">
      <div className="modal__content">
        <button
          className="modal__close"
          onClick={() => props.closeModal(this)}
        />
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
