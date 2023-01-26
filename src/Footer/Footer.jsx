import React from "react";
import "../Footer/Footer.css";
import jojofood from "../../Assets/jojofoodslogo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_logo">
        <img src={jojofood} alt="" />
      </div>

      <div className="footer_menu">
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
      </div>
    </div>
  );
};

export default Footer;
