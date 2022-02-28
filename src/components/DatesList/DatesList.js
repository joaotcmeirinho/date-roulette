import React from "react";

const DatesList = () => {
  const onClick = () => {
    window.location.reload(false);
  };
  return (
    <div>
      <button onClick={onClick}>Try again</button>

      <h2>hello</h2>
    </div>
  );
};

export default DatesList;
