import React from "react";
import "../Footer/Footer.css";
import jojofood from "../Assets/jojofoodslogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_content">
        <div className="footer_logo">
          <img src={jojofood} alt="" />
        </div>

        <div className="footer_menu">
          <ul>
            <li to={"/"}>
              <Link>Home</Link>
            </li>
            <li>
              <Link to={"/searched/pasta"}>Recipes</Link>
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
        </div>
      </div>

      <div className="footer_copyright">
        <p>© 2023 JojoFoods. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
