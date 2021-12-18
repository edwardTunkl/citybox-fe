import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../styling/myNeighbours.css"
import { FaUserFriends } from 'react-icons/fa';

export default function MyNeighbours() {

  const newNeighbours = useSelector(state => state.user.connectedUsers)

  const myId = useSelector((state) => state.user._id);
  const [myNeighbours, setMyNeighbours] = useState([]);
  console.log("MYNEIGHBOURS", myNeighbours);

  useEffect(() => {
    getNeighbours();
  }, [newNeighbours]);

  const getNeighbours = async () => {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_BE_URL}/users/${myId}`,
        {
          method: "GET",
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log("NEIGHBOUR DATA", data);
        setMyNeighbours(data.connectedUsers);
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      
      <div className="ml-5 mt-2">
        {myNeighbours?.map((n) => (
          <div>
            <div className="mt-4 mb-3 headline pl-3">My Neighbours</div>
            <div className="d-flex ml-3">
            <FaUserFriends className="friendsIcon"/>
            <div className="neighbours ml-3">{n.name} </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
