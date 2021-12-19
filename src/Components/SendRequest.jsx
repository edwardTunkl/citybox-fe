import React, { forwardRef, useState } from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../redux/actions";
import "../styling/sendRequest.css";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function SendRequest({ details }) {
  console.log("REQUEST DETAILS", details);
  const user = useSelector((state) => state.user);
  console.log("REQUEST USER", user);

  const [startDate, setStartDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newUserData, setNewUserData] = useState({
    timeH: "12",
    timeM: "00",
    date: startDate,
    message: "",
    itemId: details.i._id,
    sender: user._id,
    reciever: details.i.user._id,
  });
  const dataSet = (valname, valdata) => {
    setNewUserData({ ...newUserData, [valname]: valdata });
  };

  const sendData = (e) => {
    e.preventDefault();
    postNewRequest();
    handleClose();
  };
  const postNewRequest = async () => {
    try {
      let response = await fetch(`${process.env.REACT_APP_BE_URL}/requests`, {
        method: "POST",
        body: JSON.stringify(newUserData),
        headers: {
          //Authorization: localStorage.getItem("token"),
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (response.ok) {
        let data = await response.json();
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="request-button">
      <Button variant="success" onClick={handleShow}>
        SendRequest
      </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title className="ml-3">Make your request</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      
          <Form onSubmit={(e) => sendData(e)}>
            <div className="d-flex">
              <div>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Date</Form.Label>
                </Form.Group>
              </div>
              <div className="ml-5">
                <ReactDatePicker
                  selected={newUserData.date}
                  onChange={(date) => dataSet("date", date)}
                />
              </div>
            </div>

            <div className="d-flex mt-2">
              <div className="mr-2">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label size="sm">Time</Form.Label>
                </Form.Group>
              </div>
              <div>
                <div className="d-flex">
                  <div className="ml-4">
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Control
                        as="select"
                        size="sm"
                        defaultValue={newUserData.timeH}
                        onChange={(e) => dataSet("timeH", e.target.value)}
                      >
                        <option>-</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                        <option>15</option>
                        <option>16</option>
                        <option>17</option>
                        <option>18</option>
                        <option>19</option>
                        <option>20</option>
                        <option>21</option>
                        <option>22</option>
                        <option>23</option>
                        <option>24</option>
                      </Form.Control>
                    </Form.Group>
                  </div>
                  <div>
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Control
                        as="select"
                        size="sm"
                        defaultValue={newUserData.timeM}
                        onChange={(e) => dataSet("timeM", e.target.value)}
                      >
                        <option>-</option>
                        <option>00</option>
                        <option>15</option>
                        <option>30</option>
                        <option>45</option>
                      </Form.Control>
                    </Form.Group>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex mt-2">
              <div className="mr-1">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Message</Form.Label>
                </Form.Group>
              </div>
              <div className="ml-3">
                <Form.Group controlId="formGridAddress2">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    
                    value={newUserData.message}
                    onChange={(e) => dataSet("message", e.target.value)}
                  />
                </Form.Group>
              </div>
            </div>
            <div className="button-place">
            <Button variant="primary" type="submit">
              Send
            </Button>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
}
