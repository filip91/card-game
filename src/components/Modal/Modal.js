import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import { Link } from "react-router-dom";
import "./Modal.css";

const Modal = ({ backdrop, text, btn, btnText, ...linkProps }) => {
  return (
    <div className="modal-wrap">
      {backdrop && <Backdrop />}
      <div className="modal-box">
        <div>{text}</div>
        {btn && (
          <Link {...linkProps} className="btn">
            {btnText}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Modal;
