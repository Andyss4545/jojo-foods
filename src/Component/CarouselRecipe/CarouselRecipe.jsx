import React, { useEffect, useState } from "react";
import "../CarouselRecipe/CarouselRecipe.css";
// import Carousel from "react-material-ui-carousel";
import { Paper, Button, Grid } from "@mui/material";
import RecipeService from "../../Service/recipeService";
import CarouselItem from "./CarouselItem";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";

const CarouselRecipe = (props) => {
  const [carousel, setCarousel] = useState([]);

  useEffect(() => {
    const getCarouselData = async () => {
      try {
        const response = await RecipeService.Carousel();
        setCarousel(response.data.hits);
        console.log("this is carousel", response.data.hits);
      } catch (error) {
        setCarousel(error);
      }
    };
    getCarouselData();
  }, []);

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
        showDots={true}
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
        {carousel?.map((item, index) => {
          return (
            <div key={index} className="carousel_item">
              <Link>
                <img src={item?.recipe?.images?.REGULAR?.url} alt="" />
                <h2>{item?.recipe?.label?.substring(0, 22)}</h2>
                <Button className="CheckButton">Check it out</Button>
              </Link>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselRecipe;
