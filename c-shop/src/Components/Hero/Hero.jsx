import React from "react";
import "./Hero.css";
import { assets } from "../Assets/Data";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <i class="fa-solid fa-hand-point-left"></i>
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
      <div className="hero-right">
        <img src={assets.background} alt="" />
      </div>
    </div>
  );
};

export default Hero;
