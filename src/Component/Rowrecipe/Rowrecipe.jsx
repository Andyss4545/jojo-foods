import React, { useEffect, useState } from "react";
import "../../Component/Rowrecipe/Rowrecipe.css";
import { Search } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Loader from "../Loading/Loading";

const key = `ae154f11a0704b019fda192d726fdd27`;

const Rowrecipe = () => {
  // set recipes to an empty objects of arrays
  const [recipes, setRecipes] = useState([]);
  // set loading to false
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true); // set the loading to true
        // fetch food data from spoonacular api
        const Response = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${key}&number=12`
        );
        const data = await Response.json(); //await the response
        setRecipes(data.recipes); // setRecipes to the data.recipes
        setLoading(false);
        console.log("here is my spoon", data);
      } catch (error) {
        setLoading(false);
        setRecipes(error); // if there is any error catch errror
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="rowrecipe">
      <div className="rowrecipe_recipes">
        {loading ? (
          <div className="recipe_load">
            <Loader />
          </div>
        ) : (
          Object.keys(recipes)?.length > 0 &&
          recipes?.map((recipe, index) => {
            return (
              <div key={index} className="recipe">
                <Link to={`/recipe/${recipe?.id}`}>
                  <img src={recipe?.image} alt="" />
                  <p className="recipe_rowTitle">
                    {recipe?.title?.substring(0, 22)}..
                  </p>
                  <p className="recipe_type">
                    {recipe?.diets[0] || recipe?.diets[1]}
                  </p>
                  <div className="recipe_buttons">
                    <button className="recipe_btn">View Recipe</button>
                  </div>
                </Link>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Rowrecipe;
