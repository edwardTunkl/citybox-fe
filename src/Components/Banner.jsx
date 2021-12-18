import React from "react";
import "../styling/banner.css";
import berlin from "../assets/berlin-sil.png";
import tree from "../assets/XmasTree.png"
import door from '../assets/door.png'
import { useNavigate } from "react-router";

export default function Banner() {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
    window.localStorage.clear();
  };

  return (
    <div className="back container d-flex px-0">
      <img alt="berlin" src={berlin} width="400" height="142" />
      <div className="text d-flex align-self-center">
        The city is your toolbox.
      </div>
     <div className="tree">
      <img alt="tree" src={tree} width="70" height="90" />
     </div>
     <div className="door">
      <img alt="tree" src={door} width="25" height="50"
      onClick={handleClick}
      />
     </div>
    </div>
  );
}
