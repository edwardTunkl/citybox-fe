import React, { useEffect, useState } from "react";
import "../styling/listItems.css";
import { Row, Col, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import ItemDetails from "./ItemDetails";

export default function MainListItems() {
  const [selectedItem, setSelectedItem] = useState(false);
  const [selectedItemDetails, setSelectedItemDetails] = useState({});
  console.log("SELECTED ITEM DETAILS", selectedItemDetails);

  const searchItems = useSelector((state) => state.items.results);

  function catColoring(category){
    let colorClass = '';
    if (category === 'Tools') {
       colorClass = 'row-blue';
    } else if (category === 'Kitchen') {
       colorClass = 'row-yellow';
    } else if (category === 'Garden'){
      colorClass = 'row-green'
    } else if (category === 'Other') {
      colorClass = 'row-grey'
    }
    
    return colorClass ;
 }

  return (
    <div className="list-container mx-3 my-2 p-2">
      {!selectedItem ? (
        <Table bordered hover size="sm">
          <thead>
            <tr>
              <th>Category</th>
              <th>Type</th>
              <th>Model</th>
              <th>Brand</th>
              <th>Condition</th>
              <th>Accessories</th>
              <th>Deposit</th>
            </tr>
          </thead>
          <tbody>
          {searchItems[0]?.map((i) => (
            <tr
              key={i._id}
              onClick={(e) => {
                e.preventDefault();
                setSelectedItem(true);
                setSelectedItemDetails({ i });
              }}
              className={catColoring(i.category)}
            >
              <td>{i.category}</td>
              <td>{i.type}</td>
              <td>{i.model}</td>
              <td>{i.brand}</td>
              <td>{i.condition}</td>
              <td>{i.accessories}</td>
              <td>{i.deposit}</td>
            </tr>
             ))}
          </tbody>
        </Table>
      ) : (
        <ItemDetails details={selectedItemDetails} />
      )}

      {/* {!selectedItem ? (
        <div>
          <Row className="main-row mb-1">
            <Col>Category |</Col>
            <Col>Type |</Col>
            <Col>Model</Col>
            <Col>Brand</Col>
            <Col>Condition</Col>
            <Col>Accessories</Col>
            <Col>Deposit</Col>
          </Row>
          {searchItems[0]?.map((i) => (
            <Row
              key={i._id}
              onClick={(e) => {
                e.preventDefault();
                setSelectedItem(true);
                setSelectedItemDetails({ i });
              }}
            >
              <Col>{i.category} </Col>
              <Col>{i.type} </Col>
              <Col>{i.model}</Col>
              <Col>{i.brand}</Col>
              <Col>{i.condition}</Col>
              <Col>{i.accessories}</Col>
              <Col>{i.deposit}</Col>
            </Row>
          ))}
        </div>
      ) : (
        <ItemDetails details={selectedItemDetails} />
      )} */}
    </div>
  );
}
