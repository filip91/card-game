import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div style={{ height: "100vh", backgroundColor: "rgb(46, 199, 41)" }}>
      <div className="lds-dual-ring" />
    </div>
  );
};

export default Spinner;
