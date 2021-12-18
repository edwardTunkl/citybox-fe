import React, { useEffect, useState } from "react";
import { Modal, Form, Row, Col, Button } from "react-bootstrap";
import "../styling/incomingRequests.css";
import requests from "../assets/request.png";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";
import { BiMessageRoundedAdd } from "react-icons/bi";
import { CgCloseO } from "react-icons/cg";
import { CgCheckO } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { getRequest } from "../redux/actions";
import { format, parseISO } from "date-fns";

export default function IncomingRequests() {
  const data = useSelector((state) => state.requests.incoming[0]);
  console.log("DATA FROM INCOMING REQUEST", data);
  // const [data, setData]= useState([])

  const userId = useSelector((state) => state.user._id);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getRequest();
  }, []);

  // const getRequest = async () => {
  //   try {
  //     let req = await fetch(process.env.REACT_APP_BE_URL + `/requests/${userId} `, {
  //       method: "GET"
  //     });
  //     if (req.ok) {
  //       let userRequests = await req.json();
  //     setData(userRequests)
  //     } else {
  //       throw new Error(req.statusText);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const acceptRequest = async (sender, item) => {
    try {
      let req = await fetch(
        process.env.REACT_APP_BE_URL + `/requests/${sender}/${item} `,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ accepted: true }),
        }
      );
      if (req.ok) {
        dispatch(getRequest());
        let resp = await req.json();
      }
    } catch (err) {
      console.log(err);
    }
  };
  const deletedRequest = async (sender, item) => {
    try {
      let req = await fetch(
        process.env.REACT_APP_BE_URL + `/requests/${sender}/${item} `,
        {
          method: "DELETE",
        }
      );
      if (req.ok) {
        dispatch(getRequest());
        let resp = await req.json();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <img
        alt="requests"
        src={requests}
        className="request-icon"
        onClick={handleShow}
      />
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header>
          <Modal.Title>Incoming Requests</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {data?.map((i) =>
              i.accepted === false ? (
                <div className="request-row mb-2">
                  <Row
                    key={i.itemId._id}
                    // onClick={(e) => {
                    //   e.preventDefault();
                    //   setSelectedItem(true);
                    //   setSelectedItemDetails({i})
                    // }}
                  >
                    <div className="request-text ml-4 mt-2 d-flex">
                      <div>{i.sender.name} has sent you a request!</div>
                      <div className="button-placement mt-1">
                        <Button
                          variant="outline-success"
                          className="ml-5"
                          onClick={() => {
                            console.log("ACCEPTED");
                            acceptRequest(i.sender._id, i.itemId._id);
                            handleClose()
                          }}
                        >
                          Accept
                        </Button>
                      </div>
                      <div className="mt-1">
                        <Button
                          variant="outline-danger"
                          className="ml-5"
                          onClick={() => {
                            console.log("DELETED");
                            deletedRequest(i.sender._id, i.itemId._id);
                            dispatch(getRequest());
                          }}
                        >
                          Decline
                        </Button>
                      </div>
                    </div>
                    {/* <Col>{i.itemId.category} </Col>
                  <Col>{i.itemId.type} </Col>
                  <Col>{i.itemId.model}</Col>
                  <Col>{i.itemId.brand}</Col>
                  <Col>{i.itemId.condition}</Col>
                  <Col>{i.itemId.accessories}</Col>
                  <Col>{i.itemId.deposit}</Col> */}
                  </Row>
                  <div className="d-flex mt-3">
                    <div>
                      <div className="ml-3 mt-1 d-flex">
                        <div className="format-text mr-3">Date:</div>
                        <div>{format(parseISO(i.date), "dd. MMM. yyyy")} </div>
                      </div>

                      <div className="ml-3 mt-1 d-flex">
                        <div className="format-text mr-3">Time:</div>
                        <div>
                          {i.timeH} : {i.timeM}
                        </div>
                      </div>
                    </div>
                    <div className="ml-4 mt-1 d-flex sender-message mb-3">
                      <div className="format-text mr-3">Message:</div>
                      <div>{i.message}</div>
                    </div>

                    <div className="ml-2 mt-1 mb-3">
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
