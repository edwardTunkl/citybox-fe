import React from "react";
import "../styling/main.css";
import { Row, Col } from "react-bootstrap";
import Search from "./Search";
import Banner from "./Banner";
import SearchIcons from "./SearchIcons";
import Request from "./Request";
import MyNeighbours from "./MyNeighbours";
import MainListItems from "./MainListItems";

export default function Main() {
  return (
    <div id="main" className="container">
      <Banner />
      <Row>
        <Col md={4} className="px-0">
          <Search />
          <Request />
          <MyNeighbours/>
        </Col>
        <Col md={8} className="px-0 pr-4">
          <SearchIcons />
          <MainListItems />
        </Col>
      </Row>
    </div>
  );
}
