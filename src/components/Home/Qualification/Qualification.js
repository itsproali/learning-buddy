import React from "react";

const Qualification = () => {
  return (
    <div className="parent py-6 mt-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl font-bold active">Education & Certificate</h1>
          <ul className=" ml-4 mt-4" style={{ listStyleType: "square" }}>
            <li className="text-xl my-2">
              University of Dhaka - Bachelor in Science, BSC, Interdisciplinary
              Studies
            </li>
            <li className="text-xl my-2">
              North South University - Masters in Business Administration, MBA
              Studies
            </li>
            <li className="text-xl my-2">
              BRAC University - Masters in Business Administration, Business
              Studies
            </li>
          </ul>
        </div>
        <div className="main-image">
                  <img
                      className="h-[400px]"
            src="https://i.ibb.co/rfLkfdC/single-image-01.jpg"
            alt="Educated Person"
          />
        </div>
      </div>
    </div>
  );
};

export default Qualification;
