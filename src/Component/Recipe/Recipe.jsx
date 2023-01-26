import React, { useState, useEffect } from "react";
import "../Recipe/Recipe.css";
import { useParams } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import Loader from "../Loading/Loading";
import "animate.css";
import { GlobaStateValue } from "../../Global-State/StateProvider";

const key = `b34c6b1639d041499677218848255a22`;

const Recipe = () => {
  const [{ favorite }, dispatch] = GlobaStateValue();
  console.log("favorite", favorite);
  // set the id of each recipe
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

        // save favorite to localStorage
        // localStorage.setItem("ADD_TO_FAVORITE", JSON.stringify(favorite));
      } catch (error) {
        setRecipe(error);
        setLoading(false);
      }
    };

    fetchRecipes(); // call the fetchRecipes fucntion
  }, [favorite]);

  // let addToFavorite = () => {};

  //get the local storage item
  const getLocalData = () => {
    const data = localStorage.getItem("ADD_TO_FAVORITE");
    if (data) {
      // Parse it back to an object
      const localData = JSON.parse(data);

      return localData;
    } else {
      // otherwise return empty object
      return [];
    }
  };

  useEffect(() => {
    getLocalData();
  }, []);

  //  assign getLcalData to a new variable
  const localData = getLocalData();

  // find the id of the saved item
  const isSaved = localData.find((item) => item.id === recipe.id);

  return loading ? (
    <div className="recipe_loading">
      <Loader />
    </div>
  ) : (
    <div className="recipe_page">
      <div className="recipe_header">
        <div className="recipe_headerLeft">
          <p className="recipe_title">{recipe?.title}</p>
          {/**addtofavorite whent btn is clicked */}
          <div
            onClick={() => {
              // Save the recipe to the favorite state
              dispatch({ type: "ADD_TO_FAVORITE", favorite: recipe });
              if (!isSaved) {
                // Add the new recipe to the localData array
                localData.push(recipe);

                // Save the updated localData array to local storage
                localStorage.setItem(
                  "ADD_TO_FAVORITE",
                  JSON.stringify(localData)
                );
              }
            }}
          >
            {isSaved ? (
              <p className="recipe_saved">
                <FavoriteIcon className="saved_icon" />{" "}
                <span>Saved To Favorite</span>
              </p>
            ) : (
              <p className="recipe_save">
                <FavoriteIcon /> <span>Save To Favorite</span>
              </p>
            )}
          </div>
          <img
            className="recipe_img animate__animated animate__fadeInDown"
            src={recipe?.image}
            alt=""
          />

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
              <p
                className="animate__animated animate__fadeIn"
                dangerouslySetInnerHTML={{ __html: recipe?.summary }}
              ></p>
            )}

            {/** if activeTab === description show <p> tag */}
            {activeTab === "instruction" && (
              <p
                className="recipe_instruction animate__animated animate__fadeIn"
                dangerouslySetInnerHTML={{ __html: recipe?.instructions }}
              ></p>
            )}
          </div>
        </div>
      </div>

      <div className="recipe_ingredients animate__animated animate__fadeInLeft">
        <p className="ingredient_title">Ingredients:</p>
        <ul>
          {/** show all the ingredients by mapping */}
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
