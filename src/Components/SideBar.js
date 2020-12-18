import React from "react";
import { NavLink } from "react-router-dom";
import Meme from "../images/meme.png";
import Messaging from "../images/messaging.png";
import Nitendo from "../images/nitendo.png";
import Video from "../images/video.png";

const SideBar = () => {
  return (
    <div className="sidebar">
      <NavLink to="/" activeClassName="active">
        <img src={Meme} alt="" className="icon" />
      </NavLink>
      <NavLink to="/" activeClassName="active">
        <img src={Messaging} alt="" className="icon" />
      </NavLink>
      <NavLink to="/" activeClassName="active">
        <img src={Nitendo} alt="" className="icon" />
      </NavLink>
      <NavLink to="/" activeClassName="active">
        <img src={Video} alt="" className="icon" />
      </NavLink>
    </div>
  );
};

export default SideBar;
