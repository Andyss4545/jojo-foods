import React from "react";
import "../Favorites/Favorites.css";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

const Favorites = () => {
  return (
    <div className="favorites">
      <p>Favorites</p>
      <div className="favorites_container">
        <div className="favorites_items">
          <div className="favorite_discover">
            <Link>
              <div className="favorites_icon">
                <AddIcon className="favorites_add" />
              </div>

              <h3>DISCOVER RECIPES</h3>
            </Link>
          </div>
          <div className="favorites_content">
            <Link to={"/"}>
              <img
                src="https://spoonacular.com/recipeImages/633302-556x370.jpg"
                alt=""
              />
              <h3>Bacon Caramels</h3>
              <div className="favorites_buttons">
                <button className="favorites_btn">View Recipe</button>
              </div>
            </Link>
          </div>
          <div className="favorites_content">
            <Link to={"/"}>
              <img
                src="https://spoonacular.com/recipeImages/633302-556x370.jpg"
                alt=""
              />
              <h3>Bacon Caramels</h3>
              <div className="favorites_buttons">
                <button className="favorites_btn">View Recipe</button>
              </div>
            </Link>
          </div>

          <div className="favorites_content">
            <Link to={"/"}>
              <img
                src="https://spoonacular.com/recipeImages/633302-556x370.jpg"
                alt=""
              />
              <h3>Bacon Caramels</h3>
              <div className="favorites_buttons">
                <button className="favorites_btn">View Recipe</button>
              </div>
            </Link>
          </div>

          <div className="favorites_content">
            <Link to={"/"}>
              <img
                src="https://spoonacular.com/recipeImages/633302-556x370.jpg"
                alt=""
              />
              <h3>Bacon Caramels</h3>
              <div className="favorites_buttons">
                <button className="favorites_btn">View Recipe</button>
              </div>
            </Link>
          </div>

          <div className="favorites_content">
            <Link to={"/"}>
              <img
                src="https://spoonacular.com/recipeImages/633302-556x370.jpg"
                alt=""
              />
              <h3>Bacon Caramels</h3>
              <div className="favorites_buttons">
                <button className="favorites_btn">View Recipe</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
