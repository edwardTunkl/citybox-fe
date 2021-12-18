import React, { useState } from "react";
import tools from "../assets/tools.png";
import kitchen from "../assets/cooking.png";
import garden from "../assets/garden.png";
import pliers from '../assets/pliers.png'
import drill from '../assets/power_drill.png'
import ladder from '../assets/ladder.png'
import microwave from '../assets/microwave_oven.png'
import bowl from '../assets/bowl.png'
import cleaver from '../assets/cleaver.png'
import spade from '../assets/spade.png'
import watering from '../assets/watering_can.png'
import wheelbarrow from '../assets/wheelbarrow.png'
import other from '../assets/other.png'
import "../styling/searchIcons.css";
import { useDispatch } from 'react-redux'
import { searchItems, setQuery } from '../redux/actions'

export default function SearchIcons() {
  const dispatch = useDispatch()

  const [showTools, setShowTools] = useState(false);
  const [showKitchen, setShowKitchen] = useState(false);
  const [showGarden, setShowGarden] = useState(false);
  const [showOther, setShowOther] = useState(false)
if (showTools === false && showKitchen === false && showGarden === false){
  return (
    <div className="d-flex mt-4">
          <div>
            <img
              alt="tools"
              src={tools}
              className="icons"
              onChange={(e) => {
                dispatch(setQuery("Tools"));
                dispatch(searchItems("Tools"));
              }}
              onClick={() =>{
                !showTools ? setShowTools(true) : setShowTools(false);
                dispatch(setQuery("Tools"));
                dispatch(searchItems("Tools"));}
              }
            />
            <div className="icon-text">Tools</div>
          </div>
          <div>
            <img
              alt="kitchen"
              src={kitchen}
              className="icons"
              onClick={() =>
                {!showKitchen ? setShowKitchen(true) : setShowKitchen(false);
                  dispatch(setQuery("Kitchen"));
                  dispatch(searchItems("Kitchen"))}
              }
            />
            <div className="icon-text">Kitchen</div>
          </div>
          <div>
            <img
              alt="garden"
              src={garden}
              className="icons"
              onClick={() =>
                {!showGarden ? setShowGarden(true) : setShowGarden(false);
                  dispatch(setQuery("Garden"));
                  dispatch(searchItems("Garden"))}
              }
            />
            <div className="icon-text">Garden</div>
          </div>
          <div>
            <img
              alt="other"
              src={other}
              className="icons"
              onClick={() =>
                {!showOther ? setShowOther(true) : setShowOther(false);
                  dispatch(setQuery("Other"));
                  dispatch(searchItems("Other"))}
              }
            />
            <div className="icon-text">Other</div>
          </div>
        </div>
  )
} else if (showTools === true) {
  return (
    <div className="d-flex mt-4">
          <div>
            <img
              alt="tools"
              src={tools}
              className="icons"
              onClick={() =>
               !showTools ? setShowTools(true) : setShowTools(false)
              }
            />
            <div className="icon-text">Tools</div>
          </div>
          <div>
            <img
              alt="tools"
              src={drill}
              className="icons-selected"
              onClick={()=> {
                dispatch(setQuery("Drill"));
                dispatch(searchItems("Drill"))
              }}
            />
            <div className="icon-text-selected">Drills</div>
          </div>
          <div>
            <img
              alt="tools"
              src={pliers}
              className="icons-selected"
              onClick={()=> {
                dispatch(setQuery("Pliers"));
                dispatch(searchItems("Pliers"))
              }}
            />
            <div className="icon-text-selected">Pliers</div>
          </div>
          <div>
            <img
              alt="tools"
              src={ladder}
              className="icons-selected"
              onClick={()=> {
                dispatch(setQuery("Ladder"));
                dispatch(searchItems("Ladder"))
              }}
            />
            <div className="icon-text-selected">Ladders</div>
          </div>
          <div>
            <img
              alt="tools"
              src={other}
              className="icons-selected"
              onClick={()=> {
                dispatch(setQuery("Other"));
                dispatch(searchItems("Other"))
              }}
            />
            <div className="icon-text-selected">Other</div>
          </div>
        </div>
  )
} else if (showKitchen === true) {
  return (
    <div className="d-flex mt-4">
          <div>
            <img
              alt="tools"
              src={kitchen}
              className="icons"
              onClick={() =>
               { !showKitchen ? setShowKitchen(true) : setShowKitchen(false);
                }
              }
            />
            <div className="icon-text">Kitchen</div>
          </div>
          <div>
            <img
              alt="tools"
              src={cleaver}
              className="icons-selected"
              onClick={()=> {
                dispatch(setQuery("Cleaver"));
                dispatch(searchItems("Cleaver"))
              }}
            />
            <div className="icon-text-selected">Cleavers</div>
          </div>
          <div>
            <img
              alt="tools"
              src={microwave}
              className="icons-selected"
              onClick={()=> {
                dispatch(setQuery("Kitchenware"));
                dispatch(searchItems("Kitchenware"))
              }}
            />
            <div className="icon-text-selected kitchenware">Kitchenware</div>
          </div>
          <div>
            <img
              alt="tools"
              src={bowl}
              className="icons-selected"
              onClick={()=> {
                dispatch(setQuery("Bowl"));
                dispatch(searchItems("Bowl"))
              }}
            />
            <div className="icon-text-selected">Bowls</div>
          </div>
          <div>
            <img
              alt="tools"
              src={other}
              className="icons-selected"
              onClick={()=> {
                dispatch(setQuery("Other"));
                dispatch(searchItems("Other"))
              }}
            />
            <div className="icon-text-selected">Other</div>
          </div>
        </div>
  )
} else if (showGarden === true) {
  return (
    <div className="d-flex mt-4">
          <div>
            <img
              alt="tools"
              src={garden}
              className="icons"
              onClick={() =>
                !showGarden ? setShowGarden(true) : setShowGarden(false)
              }
            />
            <div className="icon-text">Garden</div>
          </div>
          <div>
            <img
              alt="tools"
              src={spade}
              className="icons-selected"
              onClick={()=> {
                dispatch(setQuery("Spade"));
                dispatch(searchItems("Spade"))
              }}
            />
            <div className="icon-text-selected">Spade</div>
          </div>
          <div>
            <img
              alt="tools"
              src={watering}
              className="icons-selected"
              onClick={()=> {
                dispatch(setQuery("Watering"));
                dispatch(searchItems("Watering"))
              }}
            />
            <div className="icon-text-selected ml-5">Watering</div>
          </div>
          <div>
            <img
              alt="tools"
              src={wheelbarrow}
              className="icons-selected"
              onClick={()=> {
                dispatch(setQuery("Wheelbarrow"));
                dispatch(searchItems("Wheelbarrow"))
              }}
            />
            <div className="icon-text-selected wheelbarrow">Wheelbarrow</div>
          </div>
          <div>
            <img
              alt="tools"
              src={other}
              className="icons-selected"
              onClick={()=> {
                dispatch(setQuery("Other"));
                dispatch(searchItems("Other"))
              }}
            />
            <div className="icon-text-selected">Other</div>
          </div>
        </div>
      
  )
}

 
}
