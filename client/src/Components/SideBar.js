import React from "react";
import { NavLink } from "react-router-dom";
import Meme from "../images/meme.png";
import Messaging from "../images/messaging.png";
import Nitendo from "../images/nitendo.png";
import Video from "../images/video.png";
import Home from "../images/home.png";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-icons">
        <NavLink to="/home" activeClassName="active">
          <img src={Home} alt="" className="icon2" />
        </NavLink>
        <NavLink to="/meme" activeClassName="active">
          <img src={Meme} alt="" className="icon1" />
        </NavLink>
        <NavLink to="/messaging" activeClassName="active">
          <img src={Messaging} alt="" className="icon" />
        </NavLink>
        <NavLink to="/games" activeClassName="active">
          <img src={Nitendo} alt="" className="icon" />
        </NavLink>
        <NavLink to="/video" activeClassName="active">
          <img src={Video} alt="" className="icon1" />
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
