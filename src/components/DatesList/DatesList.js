import React from "react";

const DatesList = ({ result }) => {
  console.log(result);
  const onClick = () => {
    window.location.reload(false);
  };
  return (
    <div>
      <button onClick={onClick}>Try again</button>

      <h2>Hello</h2>
    </div>
  );
};

export default DatesList;
