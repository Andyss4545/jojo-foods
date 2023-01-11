import React from "react";
import "../Header/Header.css";
import { Link } from "react-router-dom";
import jojofood from "../../Assets/jojofoodslogo.png";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import { Close } from "@mui/icons-material";

const Header = () => {
  return (
    <div className="header">
      <div className="header_container">
        <div className="header_hamburger">
          <MenuIcon className="header_hamIcon" />
          <Close className="header_closeIcon" />
        </div>
        <div className="header_logo">
          <Link>
            <img src={jojofood} alt="" />
          </Link>
        </div>

        <div className="header_menu">
          <nav>
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
            <SearchIcon className="header_search" />
            <FavoriteIcon className="header_favorite" />
            <PersonIcon className="header_person" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
