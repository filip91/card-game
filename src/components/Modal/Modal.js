import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import { Link } from "react-router-dom";
import "./Modal.css";

const Modal = ({ backdrop, text, btn }) => {
  return (
    <div className="modal-wrap">
      {backdrop && <Backdrop />}
      <div className="modal-box">
        <p>{text}</p>
        {btn && (
          <Link to="/" className="btn">
            Back to home
          </Link>
        )}
      </div>
    </div>
  );
};

export default Modal;
