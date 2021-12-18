import React, { useEffect, useState } from "react";
import { Modal, Form, Row, Col, Button } from "react-bootstrap";
import "../styling/acceptedRequests.css";
import acceptedRequest from "../assets/requestAccepted.png"
import { useDispatch, useSelector } from "react-redux";
import { getRequest, setUserInfo } from "../redux/actions";
import { format, parseISO } from "date-fns";


export default function AcceptedRequests() {

  //const data = useSelector((state) => state.requests.incoming[0]);
  const [data, setData]= useState([])
  console.log("DATA FROM INCOMING REQUEST", data);

  const user = useSelector((state) => state.user);
  const userId = useSelector((state) => state.user._id);

  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getAcceptedRequest();
  }, []);

   const getAcceptedRequest = async () => {
     try {
       let req = await fetch(process.env.REACT_APP_BE_URL + `/requests/accepted/${userId} `, {
         method: "GET"
       });
       if (req.ok) {
         let userRequests = await req.json();
       setData(userRequests)
       } else {
         throw new Error(req.statusText);
       }
     } catch (error) {
       console.log(error);
     }
   }
  const confirmRequest = async (sender, item) => {
    try {
      let req = await fetch(
        process.env.REACT_APP_BE_URL + `/requests/${sender}/${item} `,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ active: false }),
        }
      );
      let resp = await req.json();
      dispatch(setUserInfo(user));
    } catch (err) {
      console.log(err);
    }
  };

  const addUser = async (newUser) => {
    try {
      let response = await fetch(`${process.env.REACT_APP_BE_URL}/users/me/add/${newUser}`, {
        method: "PUT",
        body: JSON.stringify({newUser}),
        headers: {
          Authorization: localStorage.getItem("token"),
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (response.ok) {
        let data = await response.json();
        dispatch(setUserInfo(user));
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <img alt="requests" 
      src={acceptedRequest} className="request-icon"
      onClick={handleShow}
       />

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header>
          <Modal.Title>Accepted Requests</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {data?.map((i) =>
              i.accepted === true && i.active === true ? (
                <div className="request-row mb-2">
                  <div className="d-flex mt-2">
                  <div className="ml-3 mt-1 message-text">
                    {i.reciever.name} has accepted your request!
                  </div>
                  <div>
                  <Button
                      className="connect-button"
                      variant="outline-dark"
                      size="sm"
                      type="submit"
                      onClick={() => {
                        console.log("ACCEPTED");
                        setTimeout(function () {
                          addUser(i.reciever._id);
                        }, 200);
                        handleClose()

                     //   dispatch(getRequest());
                      }}
                    >
                      Connect Neighbour
                    </Button>
                  </div>
                  </div>
                  <div className="d-flex mt-3">
                    <div>
                      <div className="ml-3 mt-1 d-flex">
                        <div className="format-text mr-3">Date:</div><div>{format(parseISO(i.date), "dd. MMM. yyyy")}{" "}</div>
                         
                      </div>
                      <div className="ml-3 mt-1 d-flex">
                        <div className="format-text mr-3">Time:</div><div>{i.timeH} : {i.timeM}</div>
                      </div>
                    </div>

                    <div className="ml-5 mt-1 mb-4">
                      <div className="d-flex">
                        <div className="format-text mr-3">Name:</div><div className="ml-4">{i.reciever.name} {i.reciever.surname}</div>                         
                      </div>
                      <div className="d-flex">
                        <div className="format-text mr-3">Street:</div><div className="ml-4">{i.reciever.street} {i.reciever.number}</div>                         
                      </div>
                      <div className="d-flex">
                        <div className="format-text mr-3">Postcode:</div><div>{i.reciever.postcode}</div>                         
                      </div>
                      <div className="d-flex">
                        <div className="format-text mr-5">City:</div><div className="ml-2">{i.reciever.city}</div>                         
                      </div>
                      
                    </div>
                    <div className="ml-5 mt-1">
                    <div className="d-flex ml-3">
                        <div className="format-text mr-4">Type:</div><div className="ml-2">{i.itemId.type}</div>                         
                      </div>              
                    <div className="d-flex ml-3">
                        <div className="format-text mr-3">Model:</div><div className="ml-1">{i.itemId.model} </div>                         
                      </div>
                    <div className="d-flex ml-3">
                        <div className="format-text mr-3">Brand:</div><div className="ml-2">{i.itemId.brand} </div>                         
                      </div>
                    </div>
                    <div className="ml-5 mt-3">

                    </div>
                  </div>
                </div>
              ) : (
                <div></div>
              )
            )}
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
}
