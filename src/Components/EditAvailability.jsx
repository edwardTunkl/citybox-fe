import React, { useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../redux/actions";
import "../styling/editAvailability.css";

export default function EditAvailability() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newUserData, setNewUserData] = useState({
    schedule: {
      MoStH: user.schedule.MoStH,
      MoStM: user.schedule.MoStM,
      MoEH: user.schedule.MoEH,
      MoEM: user.schedule.MoEM,
      TuStH: user.schedule.TuStH,
      TuStM: user.schedule.TuStM,
      TuEH: user.schedule.TuEH,
      TuEM: user.schedule.TuEM,
      WeStH: user.schedule.WeStH,
      WeStM: user.schedule.WeStM,
      WeEH: user.schedule.WeEH,
      WeEM: user.schedule.WeEM,
      ThStH: user.schedule.ThStH,
      ThStM: user.schedule.ThStM,
      ThEH: user.schedule.ThEH,
      ThEM: user.schedule.ThEM,
      FrStH: user.schedule.FrStH,
      FrStM: user.schedule.FrStM,
      FrEH: user.schedule.FrEH,
      FrEM: user.schedule.FrEM,
      SaStH: user.schedule.SaStH,
      SaStM: user.schedule.SaStM,
      SaEH: user.schedule.SaEH,
      SaEM: user.schedule.SaEM,
      SuStH: user.schedule.SuStH,
      SuStM: user.schedule.SuStM,
      SuEH: user.schedule.SuEH,
      SuEM: user.schedule.SuEM,
    },
  });

  const dataSet = (valname, valdata) => {
    setNewUserData({ schedule: {...newUserData.schedule, [valname]: valdata} })
   // setNewUserData({ ...newUserData.schedule, [valname]: valdata });
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
          <Modal.Title>Change Availability</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => sendData(e)} >
            <Row>
              <Col className="time-picker">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Monday</Form.Label>
                </Form.Group>
              </Col>
              <Col className="time-picker ml-3">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Control
                    as="select"
                    defaultValue={newUserData.schedule.MoStH}
                    onChange={(e) => dataSet("MoStH", e.target.value)}
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
              </Col>
              <Col className="time-picker">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Control
                    as="select"
                    defaultValue={newUserData.schedule.MoStM}
                    onChange={(e) => dataSet("MoStM", e.target.value)}
                  >
                    <option>-</option>
                    <option>00</option>
                    <option>15</option>
                    <option>30</option>
                    <option>45</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col className="time-picker">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Control
                    as="select"
                    defaultValue={newUserData.schedule.MoEH}
                    onChange={(e) => dataSet("MoEH", e.target.value)}
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
              </Col>
              <Col className="time-picker">
              <Form.Group as={Col} controlId="formGridState">
                  <Form.Control as="select" 
                  defaultValue={newUserData.schedule.MoEM}
                  onChange={(e) => dataSet("MoEM", e.target.value)}
                  >
                    <option>-</option>
                    <option>00</option>
                    <option>15</option>
                    <option>30</option>
                    <option>45</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col className="time-picker">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Tuesday</Form.Label>
                </Form.Group>
              </Col>
              <Col className="time-picker ml-3">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Control as="select"
                   defaultValue={newUserData.schedule.TuStH}
                   onChange={(e) => dataSet("TuStH", e.target.value)}
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
              </Col>
              <Col className="time-picker">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Control as="select" 
                  defaultValue={newUserData.schedule.TuStM}
                  onChange={(e) => dataSet("TuStM", e.target.value)}
                  >
                    <option>-</option>
                    <option>00</option>
                    <option>15</option>
                    <option>30</option>
                    <option>45</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col className="time-picker">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Control as="select"
                  defaultValue={newUserData.schedule.TuEH}
                  onChange={(e) => dataSet("TuEH", e.target.value)}
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
              </Col>
              <Col className="time-picker">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Control as="select" 
                  defaultValue={newUserData.schedule.TuEM}
                  onChange={(e) => dataSet("TuEM", e.target.value)}
                  >
                    <option>-</option>
                    <option>00</option>
                    <option>15</option>
                    <option>30</option>
                    <option>45</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col className="time-picker">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Wednesday</Form.Label>
                </Form.Group>
              </Col>
              <Col className="time-picker">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Control as="select" 
                  defaultValue={newUserData.schedule.WeStH}
                   onChange={(e) => dataSet("WeStH", e.target.value)}
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
              </Col>
              <Col className="time-picker">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Control as="select" 
                  defaultValue={newUserData.schedule.WeStM}
                  onChange={(e) => dataSet("WeStM", e.target.value)}
                  >
                    <option>-</option>
                    <option>00</option>
                    <option>15</option>
                    <option>30</option>
                    <option>45</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col className="time-picker">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Control as="select" 
                  defaultValue={newUserData.schedule.WeEH}
                  onChange={(e) => dataSet("WeEH", e.target.value)}
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
              </Col>
              <Col className="time-picker">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Control as="select"
                  defaultValue={newUserData.schedule.WeEM}
                  onChange={(e) => dataSet("WeEM", e.target.value)}
                  >
                    <option>-</option>
                    <option>00</option>
                    <option>15</option>
                    <option>30</option>
                    <option>45</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col className="time-picker">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Thursday</Form.Label>
                </Form.Group>
              </Col>
              <Col className="time-picker ml-3">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Control as="select" 
                  defaultValue={newUserData.schedule.ThStH}
                   onChange={(e) => dataSet("ThStH", e.target.value)}
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
              </Col>
              <Col className="time-picker">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Control as="select" 
                  defaultValue={newUserData.schedule.ThStM}
                  onChange={(e) => dataSet("ThStM", e.target.value)}
                  >
                    <option>-</option>
                    <option>00</option>
                    <option>15</option>
                    <option>30</option>
                    <option>45</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col className="time-picker">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Control as="select" 
                  defaultValue={newUserData.schedule.ThEH}
                  onChange={(e) => dataSet("ThEH", e.target.value)}
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
              </Col>
              <Col className="time-picker">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Control as="select" 
                  defaultValue={newUserData.schedule.ThEM}
                  onChange={(e) => dataSet("ThEM", e.target.value)}
                  >
                    <option>-</option>
                    <option>00</option>
                    <option>15</option>
                    <option>30</option>
                    <option>45</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col className="time-picker">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Friday</Form.Label>
                </Form.Group>
              </Col>
              <Col className="time-picker ml-3">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Control as="select" 
                  defaultValue={newUserData.schedule.FrStH}
                   onChange={(e) => dataSet("FrStH", e.target.value)}
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
              </Col>
              <Col className="time-picker">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Control as="select"
                  defaultValue={newUserData.schedule.FrStM}
                  onChange={(e) => dataSet("FrStM", e.target.value)}
                  >
                    <option>-</option>
                    <option>00</option>
                    <option>15</option>
                    <option>30</option>
                    <option>45</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col className="time-picker">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Control as="select" 
                  defaultValue={newUserData.schedule.FrEH}
                  onChange={(e) => dataSet("FrEH", e.target.value)}
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
              </Col>
              <Col className="time-picker">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Control as="select"
                  defaultValue={newUserData.schedule.FrEM}
                  onChange={(e) => dataSet("FrEM", e.target.value)}
                  >
                    <option>-</option>
                    <option>00</option>
                    <option>15</option>
                    <option>30</option>
                    <option>45</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col className="time-picker">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Saturday</Form.Label>
                </Form.Group>
              </Col>
              <Col className="time-picker ml-3">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Control as="select"
                  defaultValue={newUserData.schedule.SaStH}
                   onChange={(e) => dataSet("SaStH", e.target.value)}
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
              </Col>
              <Col className="time-picker">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Control as="select" 
                  defaultValue={newUserData.schedule.SaStM}
                  onChange={(e) => dataSet("SaStM", e.target.value)}
                  >
                    <option>-</option>
                    <option>00</option>
                    <option>15</option>
                    <option>30</option>
                    <option>45</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col className="time-picker">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Control as="select" 
                  defaultValue={newUserData.schedule.SaEH}
                  onChange={(e) => dataSet("SaEH", e.target.value)}
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
              </Col>
              <Col className="time-picker">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Control as="select" 
                  defaultValue={newUserData.schedule.SaEM}
                  onChange={(e) => dataSet("SaEM", e.target.value)}
                  >
                    <option>-</option>
                    <option>00</option>
                    <option>15</option>
                    <option>30</option>
                    <option>45</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col className="time-picker">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Sunday</Form.Label>
                </Form.Group>
              </Col>
              <Col className="time-picker ml-3">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Control as="select"
                  defaultValue={newUserData.schedule.SuStH}
                   onChange={(e) => dataSet("SuStH", e.target.value)}
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
              </Col>
              <Col className="time-picker">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Control as="select"
                  defaultValue={newUserData.schedule.SuStM}
                  onChange={(e) => dataSet("SuStM", e.target.value)}
                  >
                    <option>-</option>
                    <option>00</option>
                    <option>15</option>
                    <option>30</option>
                    <option>45</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col className="time-picker">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Control as="select" 
                  defaultValue={newUserData.schedule.SuEH}
                  onChange={(e) => dataSet("SuEH", e.target.value)}
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
              </Col>
              <Col className="time-picker">
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Control as="select" 
                  defaultValue={newUserData.schedule.SuEM}
                  onChange={(e) => dataSet("SuEM", e.target.value)}
                  >
                    <option>-</option>
                    <option>00</option>
                    <option>15</option>
                    <option>30</option>
                    <option>45</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            
            

            <Button variant="primary" type="submit">
              Save
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
}
