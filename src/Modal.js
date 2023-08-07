import React from "react";
import "./scss/Modal.scss";

class Modal extends React.Component {
  render() {
    const { header, closeButton, text, actions, onClose } = this.props;
    return (
      <div className="modal-background" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {closeButton && (
            <span className="close-button" onClick={onClose}>
              &times;
            </span>
          )}
          <h2>{header}</h2>
          <div className="modal-text">{text}</div>
          <div className="modal-actions">{actions}</div>
        </div>
      </div>
    );
  }
}

export default Modal;
