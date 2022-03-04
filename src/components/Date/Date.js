import React from "react";
import "./Date.css";

const Date = ({ result }) => {
  const onClick = () => {
    window.location.reload(false);
  };
  return (
    <div className="result-ctn">
      <h1 className="result-title">What about?</h1>
      <div className="result-box">
        <h2 className="result-name">{result.name}</h2>
      </div>
      <button className="result-btn" onClick={onClick}>
        Try again
      </button>
    </div>
  );
};

export default Date;
