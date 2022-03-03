import React from "react";
import "./HomePage.css";
import heart from "../../assets/heart.png";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage-bg">
      <div className="homepage-ctn">
        <img className="heart-img" src={heart} />
        <h1 className="homepage-title">Date Roulette</h1>
        <p className="homepage-desc">
          Need ideas for your dates? <br></br>Click to generate a date to do
          with your partner!
        </p>

        <button className="go-btn">
          <NavLink to="roulette">Let's go</NavLink>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
