import React, { useEffect, useState } from "react";
import "../Favorites/Favorites.css";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";

const Favorites = () => {
  // set savedItems
  const [savedItems, setSavedItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("ADD_TO_FAVORITE"));
    setSavedItems(items);
  }, []);

  // clear local storage
  let clearStorage = () => {
    if (savedItems.length > 0) {
      localStorage.clear(); // localSorage clear feature
      alert("saved items is cleared");
      setSavedItems([]); // set local storage to empty array
    } else {
      alert("saved items is empty");
    }
  };

  return (
    <div className="favorites">
      <p>Favorites</p>
      <div className="favorites_container">
        <div className="favorites_items">
          <div className="favorite_discover">
            <Link to={"/"}>
              <div className="favorites_icon">
                <AddIcon className="favorites_add" />
              </div>

              <h3>DISCOVER RECIPES</h3>
            </Link>
          </div>
          {
            // map all the saved items and render it
            savedItems &&
              Object.keys(savedItems).length > 0 &&
              savedItems?.map((item) => {
                return (
                  <div key={item?.id} className="favorites_content">
                    <Link to={`/recipe/${item?.id}`}>
                      <img src={item?.image} alt="" />
                      <h3>{item?.title?.substring(0, 22)}</h3>
                      <div className="favorites_buttons">
                        <button className="favorites_btn">View Recipe</button>
                      </div>
                    </Link>
                  </div>
                );
              })
          }
        </div>
      </div>

      <div className="favorites_clear">
        {savedItems && savedItems.length > 0 ? (
          <button onClick={clearStorage}>Clear All</button>
        ) : (
          <button className="favorite_hide">clear all</button>
        )}
      </div>
      {/* 
      <div clasName="favorites_footer">
        <Footer />
      </div> */}
    </div>
  );
};

export default Favorites;
