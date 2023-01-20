import React from "react";
import "../Home/Home.css";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import Rowrecipe from "../Rowrecipe/Rowrecipe";
import CarouselRecipe from "../CarouselRecipe/CarouselRecipe";
import Search from "../Search/Search";

const Home = () => {
  return (
    <div clasName="home">
      {/* <Hero /> */}
      <div className="home_carousel animate__animated animate__bounceIn">
        <CarouselRecipe />
      </div>

      <div className="home_search">
        <Search />
      </div>

      <div className="home_row">
        <Rowrecipe />
      </div>
    </div>
  );
};

export default Home;
