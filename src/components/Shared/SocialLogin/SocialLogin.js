import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase-init";
import Spinner from "../Spinner/Spinner";
import "./SocialLogin.css";

const SocialLogin = () => {
  const navigate = useNavigate();

  const [signInWithGoogle, user, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  if (googleLoading) {
    return <Spinner></Spinner>;
  }

  if (user) {
    navigate("/");
  }

  return (
    <div>
      {googleError && <p className="text-red-400">{googleError.message}</p>}
      <div className="or-container flex items-center justify-evenly my-4">
        <div className="or-line"></div>
        <p>Or</p>
        <div className="or-line"></div>
      </div>

      <button className="social-login-group" onClick={handleGoogleSignIn}>
        <img src="https://i.ibb.co/gRLDw5G/google-logo.png" alt="google-logo" />
        <p>Continue with Google</p>
      </button>
    </div>
  );
};

export default SocialLogin;
