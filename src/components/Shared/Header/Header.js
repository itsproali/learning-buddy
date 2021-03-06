import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast, { Toaster } from "react-hot-toast";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase-init";
import "./Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth);
    toast.success("Successfully Logged Out")
    navigate("/");
  };

  return (
    <div>
      <nav className="navbar flex justify-center sticky top-0 md:items-center p-3 md:px-16 flex-col w-full md:flex-row z-10 shadow-lg">
        <div className="flex w-full items-center">
          <Link to="/">
            <h1 className="text-2xl brand-title">Learning Buddy</h1>
          </Link>
          <div
            onClick={() => setOpen(!open)}
            className="text-white cursor-pointer md:hidden ml-auto "
          >
            {open ? (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </div>
        </div>
        <div
          className={`navbar text-center  md:ml-auto shadow-lg md:shadow-none absolute top-12 z-10 md:flex md:items-center md:top-0 left-0 w-full md:w-1/2 md:static ${
            open ? "block" : "hidden"
          }`}
        >
          <NavLink to="/packages" className="nav-link md:mx-2">
            Packages
          </NavLink>

          <NavLink to="/blog" className="nav-link md:mx-2">
            Blog
          </NavLink>
          <NavLink to="/about" className="nav-link md:mx-2">
            About
          </NavLink>
          {user ? (
            <button className="orange-btn" onClick={handleSignOut}>
              Log Out
            </button>
          ) : (
            <NavLink to="/login" className="nav-link md:mx-2">
              LogIn
            </NavLink>
          )}
        </div>
      </nav>
      <Toaster/>
    </div>
  );
};

export default Header;
