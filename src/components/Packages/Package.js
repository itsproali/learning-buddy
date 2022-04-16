import React from "react";

const Package = ({ item }) => {
  const { title, details } = item;
  return (
    <div className="item-container border-2 border-gray-300">
      <h1>{title}</h1>
      <p>{details}</p>
    </div>
  );
};

export default Package;
