import React from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div>HomePage</div>
      <NavLink to="roulette">
        <button>Let's go</button>
      </NavLink>
    </>
  );
};

export default HomePage;
