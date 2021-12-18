import React, { useState } from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../redux/actions";
import "../styling/editDetails.css";

export default function EditDetails() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newUserData, setNewUserData] = useState({
    street: user.street,
    number: user.number,
    postcode: user.postcode,
    city: user.city,
  });
  const dataSet = (valname, valdata) => {
    setNewUserData({ ...newUserData, [valname]: valdata });
  };

  const sendData = (e) => {
    e.preventDefault();
    postNewData();
    handleClose();
  };
  const postNewData = async () => {
    try {
      let response = await fetch(`${process.env.REACT_APP_BE_URL}/users/me`, {
        method: "PUT",
        body: JSON.stringify(newUserData),
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
      <div className="d-flex justify-content-end">
      <Button variant="outline-info" size="sm" onClick={handleShow}>
        Edit
      </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
           Change Address
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="ml-5" onSubmit={(e) => sendData(e)}>
            <Row className="edit-row">
              <Col md={4}>
                <Form.Group controlId="formStreet">
                  <Form.Label>Street</Form.Label>
                </Form.Group>
              </Col>
              <Col md={8}>
                <Form.Group controlId="formStreet">
                  <Form.Control
                    type="text"
                    placeholder="Street..."
                    value={newUserData.street}
                    onChange={(e) => dataSet("street", e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="edit-row">
              <Col md={4}>
                <Form.Group controlId="formStreet">
                  <Form.Label>Number</Form.Label>
                </Form.Group>
              </Col>
              <Col md={8}>
                <Form.Group controlId="formStreet">
                  <Form.Control
                    type="text"
                    placeholder="Number..."
                    value={newUserData.number}
                    onChange={(e) => dataSet("number", e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="edit-row">
              <Col md={4}>
                <Form.Group controlId="formStreet">
                  <Form.Label>Postcode</Form.Label>
                </Form.Group>
              </Col>
              <Col md={8}>
                <Form.Group controlId="formStreet">
                  <Form.Control
                    type="text"
                    placeholder="Postcode..."
                    value={newUserData.postcode}
                    onChange={(e) => dataSet("postcode", e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="edit-row">
              <Col md={4}>
                <Form.Group controlId="formStreet">
                  <Form.Label>City</Form.Label>
                </Form.Group>
              </Col>
              <Col md={8}>
                <Form.Group controlId="formStreet">
                  <Form.Control
                    type="text"
                    placeholder="City..."
                    value={newUserData.city}
                    onChange={(e) => dataSet("city", e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="primary" type="submit" id="button">
              Save
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
}
