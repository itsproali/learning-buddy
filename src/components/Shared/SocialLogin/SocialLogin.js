import React from "react";
import "./SocialLogin.css";

const SocialLogin = () => {
  return (
    <div>
      <div className="or-container flex items-center justify-evenly my-4">
        <div className="or-line"></div>
        <p>Or</p>
        <div className="or-line"></div>
      </div>

      <button className="social-login-group">
        <img src="https://i.ibb.co/gRLDw5G/google-logo.png" alt="google-logo" />
        <p>Continue with Google</p>
      </button>
    </div>
  );
};

export default SocialLogin;
