import React from "react";
import "../Home/Home.css";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import Rowrecipe from "../Rowrecipe/Rowrecipe";

const Home = () => {
  return (
    <div clasName="home">
      <Hero />
      <Rowrecipe />
    </div>
  );
};

export default Home;
