import React, { useEffect, useState } from "react";
import "../Search/Searched.css";
import Loader from "../Loading/Loading";
import { useParams, Link } from "react-router-dom";
import Search from "./Search";

const key = `b34c6b1639d041499677218848255a22`;

const Searched = () => {
  let { searchTerm } = useParams();

  // set seareched recipes to an empty objects of arrays
  const [searchedRecipes, setSearchedRecipes] = useState([]);

  // set loading to false
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getSearchedRecipe = async (name) => {
      try {
        setLoading(true); // set the loading to true
        // fetch food data from spoonacular api
        const Response = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&query=${name}`
        );
        const data = await Response.json(); //await the response
        setSearchedRecipes(data.results); // setRecipes to the data.results
        setLoading(false); // after data is loaded, loading should stop
        console.log("searched recipe", data.results);
      } catch (error) {
        setSearchedRecipes(error); // if error throw the error
        setLoading(false); // set loading to false
      }
    };

    getSearchedRecipe(searchTerm); // call the search term name we set from the path in App.js
  }, [searchTerm]); // update searchTerm every time we serch

  return (
    <div className="searched">
      <div className="searched_page">
        <Search />
      </div>
      <div className="searched_recipes">
        {loading ? (
          <div className="searched_load">
            <Loader />
          </div>
        ) : (
          Object.keys(searchedRecipes)?.length > 0 &&
          searchedRecipes?.map((recipe, index) => {
            return (
              <div key={index} className="recipe">
                <Link to={`/recipe/${recipe?.id}`}>
                  <img src={recipe?.image} alt="" />
                  <p className="recipe_rowTitle">
                    {recipe?.title?.substring(0, 22)}..
                  </p>
                  {/* <p className="recipe_type">
                      {recipe?.diets[0] || recipe?.diets[1]}
                    </p> */}
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

export default Searched;
