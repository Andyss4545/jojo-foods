import React, { useEffect, useState } from "react";
import "../CarouselRecipe/CarouselRecipe.css";
// import Carousel from "react-material-ui-carousel";
import { Paper, Button, Grid } from "@mui/material";
import RecipeService from "../../Service/recipeService";
import CarouselItem from "./CarouselItem";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";

const key = `38399b056aab4dfe8ec523c2ae490b76`;

const CarouselRecipe = (props) => {
  // set carousel to empty objects with useState
  const [carousel, setCarousel] = useState([]);

  useEffect(() => {
    const getCarouselData = async () => {
      try {
        // fetch data from the spoonacular
        const Response = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${key}&number=9`
        );
        const data = await Response.json();
        setCarousel(data.recipes); // setCarousell to data.recipes
        console.log("carousel data", data);
      } catch (error) {
        setCarousel(error); // if there is error catch
      }
    };
    getCarouselData(); // call the getCarouselData() function
  }, []);

  // mobile responsive settings from "react multi carousel library"
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="carousel">
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {Object.keys(carousel).length > 0 &&
          carousel?.map((item) => {
            // map all the carousel items to display them
            return (
              <div key={item?.id} className="carousel_item">
                <Link to={`/recipe/${item?.id}`}>
                  {" "}
                  {/**set the link to the item?.id */}
                  <img src={item?.image} alt="" />
                  <p>
                    {/**if item title is greater than 25, show the substrings from 0 24 */}
                    {item?.title?.length > 24
                      ? item?.title?.substring(0, 24) + ".."
                      : item?.title}
                  </p>
                  <button className="checkButton">View Recipe</button>
                </Link>
              </div>
            );
          })}
      </Carousel>
    </div>
  );
};

export default CarouselRecipe;
