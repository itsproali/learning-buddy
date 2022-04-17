import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-text mt-16">
        <h1 className="text-6xl font-semibold">
          The Best Tutor Focused
          <br />
          On Your Learning
        </h1>
        <Link to="/packages">
          <button className="btn banner-btn">Packages</button>
        </Link>
        <Link to="/about">
          <button className="orange-btn banner-btn">About Us</button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
