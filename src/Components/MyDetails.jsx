import React, { useState } from "react";
import { Row, Col, Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import EditDetails from "./EditDetails";
import EditAvailability from './EditAvailability'
import '../styling/myDetails.css'

export default function MyDetails() {
  const myStreet = useSelector((state) => state.user.street);
  const myNumber = useSelector((state) => state.user.number);
  const myPostcode = useSelector((state) => state.user.postcode);
  const myCity = useSelector((state) => state.user.city);
  const mySchedule = useSelector(state => state.user.schedule)
  console.log("STREET", myStreet);

  return (
    <div className="ml-4 pt-5">
      <div className="mt-5 ml-4" id="editAddress" >
        <Row>
          <Col md={4} className="text-address">
            <div>Street</div>
            <div>Postcode</div>
            <div>City</div>
          </Col>
          <Col md={8}>
            <div>{myStreet}, {myNumber}
            </div>
            <div>{myPostcode} </div>
            <div>{myCity} </div>
          </Col>
        </Row>
        <div className="mt-2">
        <EditDetails/>
        </div>
      </div>
      <div className="mt-3 ml-4" id="editSchedule">
        <Row>
          <Col md={5} className="text-address">
            { mySchedule.MoStH > 0 ? (<div>Monday</div>) :  (<></>)}
            { mySchedule.TuStH > 0 ? (<div>Tuesday</div>) :  (<></>)}
            { mySchedule.WeStH > 0 ? (<div>Wednesday</div>) :  (<></>)}
            { mySchedule.ThStH > 0 ? (<div>Thursday</div>) :  (<></>)}
            { mySchedule.FrStH > 0 ? (<div>Friday</div>) :  (<></>)}
            { mySchedule.SaStH > 0 ? (<div>Saturday</div>) :  (<></>)}
            { mySchedule.SuStH > 0 ? (<div>Sunday</div>) :  (<></>)}
            
          </Col>
          <Col md={7}>
            {mySchedule.MoStH > 0 ? (<div>{mySchedule.MoStH}:{mySchedule.MoStM}-{mySchedule.MoEH}:{mySchedule.MoEM}</div>) : (<></>)}
            {mySchedule.TuStH > 0 ? (<div>{mySchedule.TuStH}:{mySchedule.TuStM}-{mySchedule.TuEH}:{mySchedule.TuEM}</div>) : (<></>)}
            {mySchedule.WeStH > 0 ? (<div>{mySchedule.WeStH}:{mySchedule.WeStM}-{mySchedule.WeEH}:{mySchedule.WeEM}</div>) : (<></>)}
            {mySchedule.ThStH > 0 ? (<div>{mySchedule.ThStH}:{mySchedule.ThStM}-{mySchedule.ThEH}:{mySchedule.ThEM}</div>) : (<></>)}
            {mySchedule.FrStH > 0 ? (<div>{mySchedule.FrStH}:{mySchedule.FrStM}-{mySchedule.FrEH}:{mySchedule.FrEM}</div>) : (<></>)}
            {mySchedule.SaStH > 0 ? (<div>{mySchedule.SaStH}:{mySchedule.SaStM}-{mySchedule.SaEH}:{mySchedule.SaEM}</div>) : (<></>)}
            {mySchedule.SuStH > 0 ? (<div>{mySchedule.SuStH}:{mySchedule.SuStM}-{mySchedule.SuEH}:{mySchedule.SuEM}</div>) : (<></>)}
            
            
          </Col>
        </Row>
        <div className="mt-2">
        <EditAvailability/>
        </div>
      </div>
    </div>
  );
}
