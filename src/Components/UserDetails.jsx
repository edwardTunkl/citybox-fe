import React from "react";
import "../styling/main.css";
import { Row, Col } from "react-bootstrap";
import Search from "./Search";
import Banner from "./Banner";
import Request from "./Request";
import MyDetails from "./MyDetails";
import AddItems from "./AddItems";
import ListItems from "./ListItems";

export default function UserDetails() {
  return (
    <div id="main" className="container">
      <Banner />
      <Row>
        <Col md={4} className="px-0">
          <Search/>
          <MyDetails/>
        </Col>
        <Col md={8} className="px-0 pr-4">
          <AddItems />
          <ListItems />
        </Col>
      </Row>
    </div>
  );
}
