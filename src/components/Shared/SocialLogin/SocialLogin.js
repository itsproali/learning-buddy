import React from "react";
import {
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import toast, { Toaster } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase-init";
import Spinner from "../Spinner/Spinner";
import "./SocialLogin.css";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  const [signInWithFacebook, fbUser, fbLoading, fbError] =
    useSignInWithFacebook(auth);

  if (googleError) {
    toast.error(googleError.message);
  }
  if (fbError) {
    toast.error(fbError.message);
  }

  if (googleLoading || fbLoading) {
    return <Spinner></Spinner>;
  }

  if (googleUser || fbUser) {
    toast.success("Logged In Successfully");
    navigate(from, { replace: true });
  }

  return (
    <div>
      <div className="or-container flex items-center justify-evenly my-4">
        <div className="or-line"></div>
        <p>Or</p>
        <div className="or-line"></div>
      </div>

      <button className="google-login-group" onClick={handleGoogleSignIn}>
        <img src="https://i.ibb.co/gRLDw5G/google-logo.png" alt="google" />
        <p>Continue with Google</p>
      </button>
      <button
        className="facebook-login-group"
        onClick={() => signInWithFacebook()}
      >
        <img src="https://i.ibb.co/qnmKkqX/facebook-new.png" alt="Facebook" />
        <p>Continue with Facebook</p>
      </button>
      <Toaster />
    </div>
  );
};

export default SocialLogin;
