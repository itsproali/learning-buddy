import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase-init";
import Spinner from "../Shared/Spinner/Spinner";

const Checkout = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  if (loading) {
    return <Spinner></Spinner>;
  }
  const handleCheckOut = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className="form-container">
      <h1 className="text-center text-2xl font-semibold my-4 ">Checkout</h1>
      <form onSubmit={handleCheckOut}>
        <input
          className="input-field"
          defaultValue={user?.displayName}
          type="text"
          name="name"
          id="name"
          placeholder="Enter Your Name"
          required
        />
        <input
          className="input-field"
          type="email"
          value={user?.email}
          name="email"
          id="email"
          placeholder="Enter Your Email"
          readOnly
          required
        />
        <input
          className="input-field"
          type="text"
          name="address"
          id="address"
          placeholder="Enter Your Address"
          required
        />
        <input
          className="input-field"
          type="text"
          name="phone"
          id="phone"
          placeholder="Enter Your Phone Number"
          required
        />

        <input
          type="submit"
          className="btn cursor-pointer mt-3"
          value="Proceed Checkout"
        />
      </form>
    </div>
  );
};

export default Checkout;
