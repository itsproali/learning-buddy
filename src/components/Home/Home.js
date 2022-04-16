import React from "react";
import Services from "../Packages/Packages";
import Banner from "./Banner/Banner";
import "./Home.css";

const Home = () => {
  return (
    <div>
      {/* Banner Section */}
      
      <Banner></Banner>
      <Services></Services>
    </div>
  );
};

export default Home;
