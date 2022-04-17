import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div>
      <div className="text-center mt-10 py-4">
        &copy; Copyright {year} | Designed and Developed by{" "}
        <a
          className="active"
          href="https://www.linkedin.com/in/itsproali/"
        >
          Mohammad Ali
        </a>
      </div>
    </div>
  );
};

export default Footer;
