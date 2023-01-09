import React, { useEffect, useState } from "react";
import "../../Component/Rowrecipe/Rowrecipe.css";
import { Search } from "@mui/icons-material";
import RecipeService from "../../Service/recipeService.js";
import axios from "axios";
import { Link } from "react-router-dom";

const Rowrecipe = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        // const Response = await fetch(
        //   `https://api.spoonacular.com/recipes/random?apiKey=${base_Key}&number=9`
        // )
        // const data = await Response.json();
        // setRecipes(data);
        const Response = await RecipeService.RecipeList();
        const data = await Response.data.hits;
        setRecipes(data);
        console.log(data);
      } catch (error) {
        setRecipes(error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="rowrecipe">
      <div className="rowrecipe_search">
        <div className="rowrecipe_input">
          <input type="search" placeholder="Search recipes.." />
          <Search />
        </div>
      </div>

      <div className="rowrecipe_recipes">
        {Object.keys(recipes).length > 0 &&
          recipes?.map((recipe, index) => {
            return (
              <div key={index} className="recipe">
                <Link>
                  <img src={recipe?.recipe?.images?.REGULAR?.url} alt="" />
                  <p className="recipe_title">
                    {recipe?.recipe?.label?.substring(0, 22)}..
                  </p>
                  <p className="recipe_type">{recipe?.recipe?.mealType[0]}</p>
                  <div className="recipe_buttons">
                    <button className="recipe_btn">Quick View</button>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Rowrecipe;
