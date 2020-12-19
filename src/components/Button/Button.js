import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = ({ children, pathTo, onClick, className }) => {
  return (
    <Link to={pathTo} className={`btn ${className}`} onClick={onClick}>
      {children}
    </Link>
  );
};

export default Button;
