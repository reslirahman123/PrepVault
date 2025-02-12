import React from 'react';
import ReactDOM from 'react-dom';
import './modal.css';  // For styling your modal

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>X</button>
        {children}
      </div>
    </div>,
    document.body // Or any other target element
  );
};

export default Modal;
