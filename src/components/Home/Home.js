import React from "react";
import { Toaster } from "react-hot-toast";
import Services from "../Packages/Packages";
import Banner from "./Banner/Banner";
import "./Home.css";
import Qualification from "./Qualification/Qualification";

const Home = () => {
  return (
    <div>
      {/* Banner Section */}
      <Banner></Banner>
      <Services></Services>
      <Qualification></Qualification>
      <Toaster />
    </div>
  );
};

export default Home;
