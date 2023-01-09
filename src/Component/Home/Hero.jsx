import React from "react";
import "../Home/Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_content">
        <div className="hero_imgleft">
          <Link>
            <img
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
            />
          </Link>

          <div className="hero_text">
            <h4>air fryer</h4>
          </div>

          <Link>
            <button className="hero_btn">Quick View</button>
          </Link>
        </div>

        <div className="hero_imgright">
          <div className="hero_small">
            <Link>
              <img
                src="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_350,ar_4:3/v1/img/recipes/14/70/09/enwfV3nRaGJSUH6zqKaK_black%20eyes%20peas%20SITE-3.jpg"
                alt=""
              />
            </Link>

            <div className="hero_text">
              <h4>air fryer</h4>
            </div>
            <Link>
              <button className="hero_btn">Quick View</button>
            </Link>
          </div>

          <div className="hero_small">
            <Link>
              <img
                src="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_350,ar_4:3/v1/img/recipes/15/83/51/GbYrjdA4SoCyDBN2KjAm_salmon-3.jpg"
                alt=""
              />
            </Link>
            <div className="hero_text">
              <h4>air fryer</h4>
            </div>
            <Link>
              <button className="hero_btn">Quick View</button>
            </Link>
          </div>

          <div className="hero_small">
            <Link>
              <img
                src="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_350,ar_4:3/v1/img/recipes/14/70/09/enwfV3nRaGJSUH6zqKaK_black%20eyes%20peas%20SITE-3.jpg"
                alt=""
              />
            </Link>
            <div className="hero_text">
              <h4>air fryer</h4>
            </div>
            <Link>
              <button className="hero_btn">Quick View</button>
            </Link>
          </div>

          <div className="hero_small">
            <Link>
              <img
                src="https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_350,ar_4:3/v1/img/recipes/61/34/7/bK3mOL55QiyKZQ0QhpBJ_0S9A0950.jpg"
                alt=""
              />
            </Link>
            <div className="hero_text">
              <h4>air fryer</h4>
            </div>
            <Link>
              <button className="hero_btn">Quick View</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
