import React from "react";
import { Toaster } from "react-hot-toast";
import Services from "../Packages/Packages";
import Banner from "./Banner/Banner";
import "./Home.css";

const Home = () => {
  return (
    <div>
      {/* Banner Section */}
      <Banner></Banner>
      <Services></Services>
      <Toaster />
    </div>
  );
};

export default Home;
