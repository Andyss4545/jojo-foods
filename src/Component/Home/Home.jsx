import React from "react";
import "../Home/Home.css";
import Rowrecipe from "../Rowrecipe/Rowrecipe";
import CarouselRecipe from "../CarouselRecipe/CarouselRecipe";
import Search from "../Search/Search";

const Home = () => {
  return (
    <div clasName="home">
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
