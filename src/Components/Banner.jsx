import React, { useState } from "react";
import "../styling/banner.css";
import berlin from "../assets/berlin-sil.png";
import tree from "../assets/XmasTree.png"
import door from '../assets/door.png'
import {Modal, Button} from 'react-bootstrap' 
import { useNavigate } from "react-router";
import linkedIn from "../assets/linkedIn.png"
import striveSchool from "../assets/strive_black.png"
import gitHub from "../assets/github.png"
import santa from "../assets/santa.png"
import merryXmas from "../assets/merry.png"
import mongoDB from "../assets/mongoDB.png"
import express from "../assets/express.png"
import theReact from "../assets/react.png"
import nodeJs from "../assets/node.png"
import theRedux from "../assets/redux.png"


export default function Banner() {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
    window.localStorage.clear();
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="back container d-flex px-0">
      <img alt="berlin" src={berlin} width="400" height="142" />
      <div className="text d-flex align-self-center">
        The city is your toolbox.
      </div>

      
     <div className="tree">
      <img alt="tree" src={tree} width="70" height="90"
      onClick={handleShow}
       />
     </div>
     <div className="door">
      <img alt="tree" src={door} width="25" height="50"
      onClick={handleClick}
      />
     </div>
     <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header className="xmasModal modal-cont">
          <img alt="merryXmas" src={merryXmas} width="420" height="150" className="merry-text"/>
          <img alt="santa" src={santa} width="240" height="120" className="mt-3 mr-4"/>
        </Modal.Header>
        <Modal.Body className="xmasBody">
            <div className="contact ml-4 mt-3">Feel free to contact me!</div>
          <div className="d-flex ml-4 mt-3">
          <img alt="linkedIn" src={linkedIn} width="140" height="50" className="mt-2"/>
          <div className="slash">/</div>
          <img alt="striveSchool" src={striveSchool} width="120" height="43" className="mt-2 ml-2 pt-1 mr-2"/>
          <div className="slash">/</div>
          <img alt="gitHub" src={gitHub} width="110" height="43" className="mt-2 ml-2 mr-3 pt-1"/>
          <div className="slash">//</div>
            <div className="xmas-font-style ml-3 mt-1">Edward Tunkl</div>
          </div>
          <div className="ml-4 mt-5 technologies">Technologies</div>
          <div className="d-flex">
            <div className="ml-2">
            <img alt="mongo" src={mongoDB} width="130" height="90" className="mt-3 ml-4"/>
            </div>
            <div className="ml-2 mt-1">
            <img alt="express" src={express} width="110" height="80" className="mt-4 ml-3"/>
            </div>
            <div className="ml-2 mt-2">
            <img alt="theReact" src={theReact} width="140" height="80" className="mt-3 ml-3"/>
            </div>
            <div className="ml-2">
            <img alt="nodeJs" src={nodeJs} width="140" height="110" className="mt-3 ml-3"/>
            </div>
            <div className="ml-1">
            <img alt="theRedux" src={theRedux} width="120" height="80" className="mt-3 ml-1"/>
            </div>
            
          </div>
        </Modal.Body>
       
      </Modal>
    </div>
  );
}
