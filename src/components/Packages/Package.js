import React from "react";
import { Link } from "react-router-dom";
import "./Packages.css";

const Package = ({ item }) => {
  const {
    title,
    details,
    img,
    first,
    second,
    third,
    fourth,
    fifth,
    sixth,
    price,
  } = item;
  return (
    <div className="item-container">
      <p className="price">{price}</p>
      <div className="item-image h-[250px]">
        <img src={img} alt="Item IMG" />
      </div>

      <div className="item-details mt-3">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p>{details}</p>
        <ul className="list-disc mt-2 ml-4 mb-12">
          {first && <li className="sub-list">{first}</li>}
          {second && <li className="sub-list">{second}</li>}
          {third && <li className="sub-list">{third}</li>}
          {fourth && <li className="sub-list">{fourth}</li>}
          {fifth && <li className="sub-list">{fifth}</li>}
          {sixth && <li className="sub-list">{sixth}</li>}
        </ul>
        <Link to="/checkout">
          <button className="orange-btn enroll-btn">Enroll Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Package;
