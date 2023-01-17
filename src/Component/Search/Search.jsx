import React, { useState } from "react";
import "../Search/Search.css";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();

  // set search state
  let [query, setQuery] = useState({
    text: "",
  });

  let { text } = query; // destructure the text

  // target the value
  let searchQuery = (e) => {
    setQuery(() => ({
      ...query,
      text: e.target.value,
    }));

    // let theRecipes = recipes?.filter((recipe) => {
    //   return recipe?.title.toLowerCase().includes(e.target.value.toLowerCase());
    // });

    // setRecipes(theRecipes);
  };

  // submitQuery function for onSubmit
  const submitQuery = (event) => {
    event.preventDefault(); // prevent default form behaviour

    // navigate to the searched text
    navigate(`/searched/${text}`, { replace: true });
  };

  return (
    <div className="search">
      <form className="search_input" onSubmit={submitQuery}>
        <input
          name="text"
          value={text}
          onChange={searchQuery}
          type="search"
          placeholder="Search recipes.."
        />
        {/* <Search /> */}
        <input
          onClick={submitQuery}
          className="search_btn"
          type="button"
          value="search"
        />
      </form>
    </div>
  );
};

export default Search;
