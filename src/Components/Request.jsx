import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Row, Col } from "react-bootstrap";
import "../styling/request.css";
import { useSelector } from "react-redux";
import IncomingRequests from "./IncomingRequests";
import AcceptedRequests from "./AcceptedRequest";

export default function Request() {
  const userId = useSelector((state) => state.user._id);
  const incomingRequests = useSelector((state) => state.requests.incoming[0]);
  // console.log("incoming request length", incomingRequests.length)
  const [recievedRequests, setRecievedRequests] = useState([]);
  const [acceptedRequests, setAcceptedRequests] = useState([])
  console.log("RECIEVED REQUESTS", recievedRequests);

  const myNewRequest = recievedRequests.filter((i) => i.accepted === false);
  console.log("MYNEWREQUEST", myNewRequest);

  const myAcceptedRequests = acceptedRequests.filter((i) => {
  return  i.accepted === true && i.active === true
  });

  console.log("MYACCEPTEDREQUESTS", myAcceptedRequests);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/me");
  };

  useEffect(() => {
    incomingRequest();
    acceptedRequest()
  }, []);

  const incomingRequest = async (sender, item) => {
    try {
      let req = await fetch(
        process.env.REACT_APP_BE_URL + `/requests/${userId}`,
        {
          method: "GET",
        }
      );
      let resp = await req.json();
      setRecievedRequests(resp);
    } catch (err) {
      console.log(err);
    }
  };
  const acceptedRequest = async (sender, item) => {
    try {
      let req = await fetch(
        process.env.REACT_APP_BE_URL + `/requests/accepted/${userId}`,
        {
          method: "GET",
        }
      );
      let resp = await req.json();
      setAcceptedRequests(resp);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="ml-5 request-container">
        <div className="mt-3">
          <Button variant="success" onClick={handleClick}>
            My Inventory
          </Button>
        </div>
        
          <div className="d-flex mt-4">
            <div className="mt-3">
              {myNewRequest.length > 0 ? <IncomingRequests /> : <div></div>}
            </div>
            <div className="mt-3">
              {myAcceptedRequests.length > 0 ? <AcceptedRequests />: <div></div>}
            </div>
          </div>
        
      </div>
    </>
  );
}
