import React from "react";
import "./meme.css"

const MemeContainer = ({ image }) => {
  console.log(image);

  return (
    <div className="memeContainer">
      <div className="memeContainer-image">
        <img src={image} alt="memeimage"  className="imageclass"/>
      </div>
    </div>
  );
};

export default MemeContainer;
