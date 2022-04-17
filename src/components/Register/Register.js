import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import "../Login/Login-register.css";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { auth } from "../../firebase-init";
import Spinner from "../Shared/Spinner/Spinner";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, updatingError] = useUpdateProfile(auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(email, password);
    if (user) {
      await updateProfile({ displayName: name });
    }
  };

  if (error) {
    toast.error(`${error.message}`);
  } else if (updatingError) {
    toast.error(`${updatingError.message}`);
  }

  if (loading || updating) {
    return <Spinner></Spinner>;
  }

  if (user) {
    toast.success("Verification Email Sent");
    navigate("/");
  }

  return (
    <div className="form-container">
      <h1 className="text-center text-2xl font-semibold my-4 ">Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="input-field"
          type="text"
          name="name"
          id="name"
          onBlur={(e) => setName(e.target.value)}
          placeholder="Enter Your Name"
        />
        <input
          className="input-field"
          type="email"
          name="email"
          id="email"
          onBlur={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email"
          required
        />
        <input
          className="input-field"
          type="password"
          name="password"
          id="password"
          onBlur={(e) => setPassword(e.target.value)}
          placeholder="Choose a strong password"
          required
        />
        {/* {error && <p className="text-red-400">{error.message}</p>} */}
        {/* {updatingError && (
          <p className="text-red-400">{updatingError.message}</p>
        )} */}
        <input
          type="submit"
          className="btn cursor-pointer mt-3"
          value="Register"
        />
        <p className="text-center mt-2">
          Already have an account ?{" "}
          <Link to="/login" className="toogle-sign-in">
            Login Now
          </Link>
        </p>
      </form>

      <SocialLogin></SocialLogin>
      <Toaster />
    </div>
  );
};

export default Register;
