import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container parent">
      <div className="not-found-image">
        <img src="https://i.ibb.co/0jwNTmN/notfound.webp" alt="NotFound" />
      </div>
      <div className="not-found-text text-center">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <Link to="/">
          <button className="orange-btn">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
