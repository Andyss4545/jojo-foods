import React, { useState, useEffect } from "react";
import "../Recipe/Recipe.css";
import { useParams } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import Loader from "../Loading/Loading";

const key = `38399b056aab4dfe8ec523c2ae490b76`;

const Recipe = () => {
  // set the id of each array
  const { nameid } = useParams();
  // recipe in array
  const [recipe, setRecipe] = useState([]);
  // set active tab
  const [activeTab, setActiveTab] = useState("description");

  // set the loadig to false initialy
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        // fetch data from spoonacula rest api
        const Response = await fetch(
          `https://api.spoonacular.com/recipes/${nameid}/information?apiKey=${key}`
        );
        const data = await Response.json();
        setRecipe(data);
        setLoading(false); // after the recipes has shown, loading will be false
        console.log("each recipe", data);

        // const Response = await RecipeService.RecipeList();
        // const data = await Response.data.hits;
        // setRecipes(data);
        // console.log(data);
      } catch (error) {
        setRecipe(error);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return loading ? (
    <div className="recipe_loading">
      <Loader />
    </div>
  ) : (
    <div className="recipe_page">
      <div className="recipe_header">
        <div className="recipe_headerLeft">
          <p className="recipe_title">{recipe?.title}</p>

          <p className="recipe_save">
            <FavoriteIcon /> <span>Save To Favorite</span>
          </p>
          <img className="recipe_img" src={recipe?.image} alt="" />

          <div className="recipe_info">
            <div className="recipe_infoItem">
              <img
                src="https://spoonacular.com/application/frontend/images/badges/cheap.svg"
                alt=""
              />
              <p>${recipe?.pricePerServing} per serving</p>
            </div>

            <div className="recipe_infoItem">
              <img
                src="https://spoonacular.com/application/frontend/images/badges/popular.svg"
                alt=""
              />
              <p>{recipe?.aggregateLikes} Likes</p>
            </div>

            <div className="recipe_infoItem">
              <img
                src="https://spoonacular.com/application/frontend/images/badges/fast.svg"
                alt=""
              />
              <p>Ready in {recipe?.readyInMinutes} minutes</p>
            </div>

            <div className="recipe_infoItem">
              <img
                src="https://spoonacular.com/application/frontend/images/badges/spoonacular-score-75.svg"
                alt=""
              />
              <p>Health Score: {recipe?.healthScore}%</p>
            </div>
          </div>
        </div>

        <div className="recipe_headerRight">
          <div className="recipe_btns">
            {/** setActiveTab to the current, if activeTab is strictly === to des, show active class */}
            <button
              onClick={() => setActiveTab("description")}
              className={activeTab === "description" ? "active" : ""}
            >
              Description
            </button>
            {/** setActiveTab to the current, if activeTab is strictly === to des, show active class */}
            <button
              onClick={() => setActiveTab("instruction")}
              className={activeTab === "instruction" ? "active" : ""}
            >
              Instruction
            </button>
          </div>

          <div className="recipe_description">
            {/** if activeTab === description show <p> tag */}
            {activeTab === "description" && (
              <p dangerouslySetInnerHTML={{ __html: recipe?.summary }}></p>
            )}

            {/** if activeTab === description show <p> tag */}
            {activeTab === "instruction" && (
              <p
                className="recipe_instruction"
                dangerouslySetInnerHTML={{ __html: recipe?.instructions }}
              ></p>
            )}
          </div>
        </div>
      </div>

      <div className="recipe_ingredients">
        <p className="ingredient_title">Ingredients:</p>
        <ul>
          {recipe?.extendedIngredients?.map((ingredient) => {
            return (
              <div className="ingredient_list">
                <CheckIcon className="ingredient_icon" />
                <li key={ingredient?.id}>{ingredient?.original}</li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Recipe;