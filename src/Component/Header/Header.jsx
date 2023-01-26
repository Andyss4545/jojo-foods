import React, { useState } from "react";
import "../Header/Header.css";
import { Link } from "react-router-dom";
import jojofood from "../../Assets/jojofoodslogo.png";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Close } from "@mui/icons-material";
import Search from "../Search/Search";
import "animate.css";

const Header = () => {
  // set mobile nav to false
  const [navbar, setNavbar] = useState(false);

  const savedItems = JSON.parse(localStorage.getItem("ADD_TO_FAVORITE"));

  // set searchbar to false

  const [searchbar, setSearchBar] = useState(false);

  return (
    <div className="header">
      <div className="header_container">
        <div className="header_hamburger">
          {navbar ? (
            <Close
              onClick={() => setNavbar(!navbar)}
              className="header_closeIcon"
            />
          ) : (
            <MenuIcon
              onClick={() => setNavbar(!navbar)}
              className="header_hamIcon"
            />
          )}
        </div>
        <div className="header_logo">
          <Link to={"/"}>
            <img src={jojofood} alt="" />
          </Link>
        </div>

        <div className="header_menu">
          <nav
            className={
              navbar
                ? "header_nav active animate__animated animate__fadeInDown"
                : "header_nav"
            }
          >
            <ul>
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Recipes</Link>
              </li>
              <li>
                <Link>Meals</Link>
              </li>
              <li>
                <Link>Videos</Link>
              </li>
              <li>
                <Link>About</Link>
              </li>
              <li>
                <Link>Contact</Link>
              </li>
            </ul>
          </nav>

          <div className="header_icons">
            <SearchIcon
              onClick={() => setSearchBar(!searchbar)}
              className="header_search"
            />
            <Link to={"recipe/favorite"}>
              {savedItems ? (
                <>
                  <FavoriteIcon className="header_favorite" />
                  <p className="header_count">{savedItems.length}</p>
                </>
              ) : (
                <FavoriteIcon className="header_favoriteActive" />
              )}
            </Link>

            <div
              className={
                searchbar
                  ? "header_searchComponent active animate__animated animate__fadeIn"
                  : "header_searchComponent"
              }
            >
              <div className="header_searchClose">
                <Close
                  onClick={() => setSearchBar(!searchbar)}
                  className="header_closeSearch"
                />
              </div>

              <div className="header_component">
                <Search />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
