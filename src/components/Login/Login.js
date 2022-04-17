import React, { useState } from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="form-container">
      <h1 className="text-center text-2xl font-semibold my-4 ">Login</h1>
      <form onSubmit={handleSubmit}>
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
        <p className="text">
          Forgot Password ?{" "}
          <button className="reset-password">Reset Password</button>
        </p>
        <input
          type="submit"
          className="btn cursor-pointer mt-3"
          value="Login"
        />
        <p className="text-center mt-2">
          Don't have an account ?{" "}
          <Link to="/register" className="toogle-sign-in">
            Register Now
          </Link>
        </p>
      </form>

      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
