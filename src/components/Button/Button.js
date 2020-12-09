import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = ({ children, pathTo, onClick }) => {
  return (
    <Link to={pathTo} className="btn" onClick={onClick}>
      {children}
    </Link>
  );
};

export default Button;
