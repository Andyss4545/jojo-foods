import React from "react";
import "../Header/Header.css";
import { Link } from "react-router-dom";
import jojofood from "../../Assets/jojofoodslogo.png";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";

const Header = () => {
  return (
    <div className="header">
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
          <SearchIcon />
          <FavoriteIcon />
          <PersonIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
