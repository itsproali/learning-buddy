import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import "../Login/Login-register.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../firebase-init";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);
  };

  if (user) {
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
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Your Name"
        />
        <input
          className="input-field"
          type="email"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email"
        />
        <input
          className="input-field"
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Choose a strong password"
        />
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
    </div>
  );
};

export default Register;
