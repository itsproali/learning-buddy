import React, { useState, useEffect } from "react";
import Package from "./Package";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, [packages]);
  console.log(packages);
  return (
    <div className="parent grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {packages.map((item) => (
        <Package key={item.id} item={item}></Package>
      ))}
    </div>
  );
};

export default Packages;
