import React, { useState, useRef } from "react";
import "../styling/addItems.css";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUserItems } from "../redux/actions";

export default function AddItems() {
  const fileInput = useRef(null);
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.user._id);
  console.log("THIS IS USERID", userId);

  const [myCategory, setMyCategory] = useState("Tools");
  const [myType, setMyType] = useState("");
  const [deposit, setDeposit] = useState(false);

  const [newItem, setNewItem] = useState({
    category: "Tools",
    type: "Drill",
    model: "",
    brand: "",
    condition: "",
    deposit: "",
    amount: "",
    accessories: "No",
  });

  const [newFile, setNewFile] = useState("");

  const dataSet = (valname, valdata) => {
    setNewItem({ ...newItem, [valname]: valdata });
  };
  const sendData = (e) => {
    e.preventDefault();
    postNewItem();
  };

  const postNewItem = async () => {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_BE_URL}/items/${userId}`,
        {
          method: "POST",
          body: JSON.stringify(newItem),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log("RESPONSE DATA", data);
        console.log("RESPONSE ID", data._id);

        const imageUpload = async () => {
          let formData = new FormData();
          let file = newFile;
          formData.append("itemPic", file);
          try {
            let response = await fetch(
              `${process.env.REACT_APP_BE_URL}/items/${data._id}/picture`,
              {
                method: "POST",
                body: formData,
              }
            );
            let imagedata = await response.json();
            if (response.ok) {
              console.log(response);
              console.log(imagedata);
            } else {
              console.log(response);
            }
          } catch (err) {
            console.log(err);
          }
        };
        imageUpload();
        setNewItem({
          category: "Tools",
          type: "Drill",
          model: "",
          brand: "",
          condition: "",
          deposit: "",
          amount: "",
          accessories: "",
          file: "",
        });
        dispatch(setUserItems());
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="form-container ml-3 mt-2">
        <Form onSubmit={(e) => sendData(e)} className="mt-2">
          <Row>
            <div className="label col-container">
              <Col className="">
                <Form.Group as={Col} controlId="formGridCity" className="mt-1">
                  <Form.Label size="sm">Category</Form.Label>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridCity" className="mt-0">
                  <Form.Label size="sm">Type</Form.Label>
                </Form.Group>
                <Form.Group controlId="formGridCity" className="mt-2 ml-3">
                  <Form.Label size="sm">Model</Form.Label>
                </Form.Group>
                <Form.Group controlId="formGridCity" className="mt-1 ml-3">
                  <Form.Label size="sm">Brand</Form.Label>
                </Form.Group>
              </Col>
            </div>
           <div className="drop-container">
              <Col className="time-picker ml-3 px-0">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Control
                    size="sm"
                    as="select"
                    defaultValue="Tools"
                    onChange={(e) => {
                      setMyCategory(e.target.value);
                      dataSet("category", e.target.value);
                    }}
                  >
                    <option>Tools</option>
                    <option>Kitchen</option>
                    <option>Garden</option>
                    <option>Other</option>
                  </Form.Control>
                </Form.Group>
                {myCategory === "Tools" && (
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Control
                       className="mt-1"
                      size="sm"
                      as="select"
                      defaultValue="Drill"
                      onChange={(e) => dataSet("type", e.target.value)}
                    >
                      <option>Drill</option>
                      <option>Pliers</option>
                      <option>Ladder</option>
                      <option>Other</option>
                    </Form.Control>
                  </Form.Group>
                )}
                {myCategory === "Kitchen" && (
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Control
                     className="mt-1"
                      size="sm"
                      as="select"
                      defaultValue="Cleavers"
                      onChange={(e) => dataSet("type", e.target.value)}
                    >
                      <option>Cleavers</option>
                      <option>Kitchenware</option>
                      <option>Bowls</option>
                      <option>Other</option>
                    </Form.Control>
                  </Form.Group>
                )}
                {myCategory === "Garden" && (
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Control
                     className="mt-1"
                      size="sm"
                      as="select"
                      defaultValue="Spade"
                      onChange={(e) => dataSet("type", e.target.value)}
                    >
                      <option>Spade</option>
                      <option>Watering</option>
                      <option>Wheelbarrow</option>
                      <option>Other</option>
                    </Form.Control>
                  </Form.Group>
                )}
                   <Form.Group controlId="formGridAddress2">
                  <Form.Control
                  className="mt-2"
                    id="mo-br"
                    size="sm"
                    placeholder="Model..."
                    value={newItem.model}
                    onChange={(e) => dataSet("model", e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formGridAddress2">
                  <Form.Control
                   className="mt-1"
                  id="mo-br"
                    size="sm"
                    placeholder="Brand..."
                    value={newItem.brand}
                    onChange={(e) => dataSet("brand", e.target.value)}
                  />
                </Form.Group>
              </Col>
              </div>

              <div className="col-container ml-5">
              <Col className="px-0 pl-1"> 
                <Form.Group controlId="formGridCity" className="mt-1">
                  <Form.Label size="sm">Condition</Form.Label>
                </Form.Group>
                <Form.Group controlId="formGridCity" className="mt-0">
                  <Form.Label size="sm">Accessories</Form.Label>
                </Form.Group>
                <Form.Group controlId="formGridCity" className="mt-2">
                  <Form.Label size="sm">Deposit</Form.Label>
                </Form.Group>
                {deposit && (
                  <Form.Group controlId="formGridCity" className="mt-2">
                    <Form.Label size="sm">Amount</Form.Label>
                  </Form.Group>
                )}
              </Col>
              </div>

              <div className="drop-container">           
              <Col className="px-0 pl-1">
                <Form.Group controlId="formGridState">
                  <Form.Control
                  id="mo-br"
                    size="sm"
                    as="select"
                    defaultValue="good"
                    onChange={(e) => dataSet("condition", e.target.value)}
                  >
                    <option>good</option>
                    <option>used</option>
                    <option>veteran</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="formGridState">
                  <Form.Control
                  id="mo-br"
                  className="mt-1"
                    size="sm"
                    as="select"
                    defaultValue="No"
                    onChange={(e) => dataSet("accessories", e.target.value)}
                  >
                    <option>No</option>
                    <option>Yes</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formGridState">
                  <Form.Control
                  id="mo-br"
                  className="mt-2"
                    size="sm"
                    as="select"
                    defaultValue="No"
                    onChange={(e) => dataSet("deposit", e.target.value)}
                  >
                    <option>No</option>
                    <option>Yes</option>
                  </Form.Control>
                </Form.Group>
                {newItem.deposit === "Yes" && (
                  <Form.Group controlId="formGridAddress2">
                    <Form.Control
                     className="mt-1"
                     id="mo-br"
                      size="sm"
                      placeholder="Amount..."
                      value={newItem.amount}
                      onChange={(e) => dataSet("amount", e.target.value)}
                    />
                  </Form.Group>
                )}
              </Col>
              </div>

              <div className="ml-3">
            <Col className="align-items-center mx-0 px-0 pl-2 mt-1">
              <div className="ml-5 mt-2">
              <div>
              <input
                type="file"
                ref={fileInput}
                style={{ display: "none" }}
                onChange={(e) => setNewFile(e.target.files[0])}
              />
              <Button variant="outline-primary" id="buttons"
              onClick={() => fileInput.current.click()}>Image</Button>
              </div>
              <div>
              <Button id="buttons" variant="primary" type="submit" className="mt-3">
                Save
              </Button>
              </div>

              </div>
            </Col>
              </div>
          </Row>
        </Form>
      </div>
    </div>
  );
}
