import React from "react";
import "../Loading/Loading.css";
import { ColorRing } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loading">
      {/** React loader spiner library for spinning */}
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#ED2647", "#ED2647"]}
      />
    </div>
  );
};

export default Loader;
