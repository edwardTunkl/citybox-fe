import React, { useEffect, useState } from "react";
import "../styling/listItems.css";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";


export default function ListItems() {
  const userItems = useSelector(state => state.items.userItems)
  console.log("userItems", userItems)


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
          {userItems[0]?.map((i) => (
            <tr
              key={i._id}
              className={catColoring(i.category)}
              id="table-styling"
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
    </div>
  );
}
