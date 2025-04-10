import React from "react";
import myGif from "./image/sunGif2.gif"
const GifComponent = () => {
  return (
    <div className="gif-container">
      <img src={myGif} alt="Loading Animation" className="gif" />
    </div>
  );
};

export default GifComponent;
