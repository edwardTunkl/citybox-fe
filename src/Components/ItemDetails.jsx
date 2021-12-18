import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import "../styling/itemDetails.css";
import tools from "../assets/tools.png";
import SendRequest from "./SendRequest";

export default function ItemDetails({ details }) {
  console.log("Details", details);
  return (
    <div>
      <Row>
        <Col md={4}>
          <div className="mt-3 ml-4">
            <img alt="tools" src={details.i.file} id="image" />
          </div>
        </Col>
        <Col md={8}>
          <div className="d-flex mt-3">
            <div className="description">
              <Form.Group as={Col} controlId="formGridCity" className="mt-1">
                <Form.Label size="sm">Model</Form.Label>
              </Form.Group>
            </div>
            <div>
              <Form.Group controlId="formGridAddress2">
                <Form.Control size="sm" value={details.i.model} />
              </Form.Group>
            </div>
          </div>
          <div className="d-flex">
            <div className="description">
              <Form.Group as={Col} controlId="formGridCity" className="mt-1">
                <Form.Label size="sm">Brand</Form.Label>
              </Form.Group>
            </div>
            <div>
              <Form.Group controlId="formGridAddress2">
                <Form.Control size="sm" value={details.i.brand} />
              </Form.Group>
            </div>
          </div>
          <div className="d-flex">
            <div className="description">
              <Form.Group as={Col} controlId="formGridCity" className="mt-1">
                <Form.Label size="sm">Condition</Form.Label>
              </Form.Group>
            </div>
            <div>
              <Form.Group controlId="formGridAddress2">
                <Form.Control size="sm" value={details.i.condition} />
              </Form.Group>
            </div>
          </div>
          <div className="d-flex">
            <div className="description">
              <Form.Group as={Col} controlId="formGridCity" className="mt-1">
                <Form.Label size="sm">Accessories</Form.Label>
              </Form.Group>
            </div>
            <div>
              <Form.Group controlId="formGridAddress2">
                <Form.Control size="sm" value={details.i.accessories} />
              </Form.Group>
            </div>
          </div>
          {details.i.deposit === "Yes" && (
            <div className="d-flex">
              <div className="description">
                <Form.Group as={Col} controlId="formGridCity" className="mt-1">
                  <Form.Label size="sm">Deposit</Form.Label>
                </Form.Group>
              </div>
              <div>
                <Form.Group controlId="formGridAddress2">
                  <Form.Control size="sm" value={details.i.amount} />
                </Form.Group>
              </div>
            </div>
          )}
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={5}>
          <div className="d-flex">
            <div className="description mt-3 ml-2">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label size="sm" className="mt-1">
                  Name
                </Form.Label>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label size="sm" className="mt-1">
                  Street
                </Form.Label>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label size="sm" className="mt-1">
                  PLZ / City
                </Form.Label>
              </Form.Group>
            </div>
            <div>
              <div className="mt-3 ml-3">
                <Form.Group controlId="formGridAddress2">
                  <Form.Control size="sm" value={details.i.user.name} />
                </Form.Group>
                <Form.Group controlId="formGridAddress2">
                  <Form.Control
                    size="sm"
                    value={details.i.user.street}
                    className="mt-1"
                  />
                </Form.Group>
                <Form.Group controlId="formGridAddress2">
                  <Form.Control
                    size="sm"
                    value={`${details.i.user.postcode} ${details.i.user.city}`}
                    className="mt-1"
                  />
                </Form.Group>
              </div>
            </div>
          </div>
        </Col>
        <Col md={7}>
          <div className="d-flex mt-3 ml-2">
            <div className="schedule-font">
              <div className="d-flex">
                {details.i.user.schedule.MoStH > 0 ? (
                  <>
                    <div className="day-style">Monday</div>
                    <div className="ml-5">
                      {details.i.user.schedule.MoStH}:
                      {details.i.user.schedule.MoStM}-
                      {details.i.user.schedule.MoEH}:
                      {details.i.user.schedule.MoEM}
                    </div>{" "}
                  </>
                ) : (
                  <></>
                )}
              </div>
              <div className="d-flex">
              {details.i.user.schedule.TuStH > 0 ? (
                  <>
                    <div className="day-style">Tuesday</div>
                    <div className="ml-5">
                      {details.i.user.schedule.TuStH}:
                      {details.i.user.schedule.TuStM}-
                      {details.i.user.schedule.TuEH}:
                      {details.i.user.schedule.TuEM}
                    </div>{" "}
                  </>
                ) : (
                  <></>
                )}
              </div>
              <div className="d-flex">
              {details.i.user.schedule.WeStH > 0 ? (
                  <>
                    <div className="day-style">Wednesday</div>
                    <div className="ml-4 px-0">
                      {details.i.user.schedule.WeStH}:
                      {details.i.user.schedule.WeStM}-
                      {details.i.user.schedule.WeEH}:
                      {details.i.user.schedule.WeEM}
                    </div>{" "}
                  </>
                ) : (
                  <></>
                )}
              </div>
              <div className="d-flex">
              {details.i.user.schedule.ThStH > 0 ? (
                  <>
                    <div className="day-style mr-3">Thursday</div>
                    <div className="ml-4">
                      {details.i.user.schedule.ThStH}:
                      {details.i.user.schedule.ThStM}-
                      {details.i.user.schedule.ThEH}:
                      {details.i.user.schedule.ThEM}
                    </div>{" "}
                  </>
                ) : (
                  <></>
                )}
              </div>
              <div className="d-flex">
              {details.i.user.schedule.FrStH > 0 ? (
                  <>
                    <div className="day-style mr-2">Friday</div>
                    <div className="ml-5 px-1">
                      {details.i.user.schedule.FrStH}:
                      {details.i.user.schedule.FrStM}-
                      {details.i.user.schedule.FrEH}:
                      {details.i.user.schedule.FrEM}
                    </div>{" "}
                  </>
                ) : (
                  <></>
                )}
              </div>
              <div className="d-flex">
              {details.i.user.schedule.SaStH > 0 ? (
                  <>
                    <div className="day-style mr-3">Saturday</div>
                    <div className="ml-4 px-1">
                      {details.i.user.schedule.SaStH}:
                      {details.i.user.schedule.SaStM}-
                      {details.i.user.schedule.SaEH}:
                      {details.i.user.schedule.SaEM}
                    </div>{" "}
                  </>
                ) : (
                  <></>
                )}
              </div>
              <div className="d-flex">
              {details.i.user.schedule.SuStH > 0 ? (
                  <>
                    <div className="day-style mr-1">Sunday</div>
                    <div className="ml-5">
                      {details.i.user.schedule.SuStH}:
                      {details.i.user.schedule.SuStM}-
                      {details.i.user.schedule.SuEH}:
                      {details.i.user.schedule.SuEM}
                    </div>{" "}
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center ml-5">
              <SendRequest details={details} />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
