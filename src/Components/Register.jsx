import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styling/register.css";
import { useNavigate } from "react-router-dom";
import { setUserInfo } from "../redux/actions";
import { useDispatch } from "react-redux";

export default function Register() {

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    street: "",
    number: "",
    postcode: "",
    city: "",
  });
  console.log(user);

  const submitRegister = async (e) => {

    e.preventDefault();
    try {
      let response = await fetch("http://localhost:3001/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      console.log(response);
      if (response.ok) {
        let data = await response.json();
        console.log("data", data);
        localStorage.setItem("token", data.accessToken);
        let user = await findUserFromToken(data.accessToken);
        if (user) {
          dispatch(setUserInfo(user));
        }
        setTimeout(function () {
          navigate("/");
        }, 300);
      } else {
        console.log("Something went wrong...");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const findUserFromToken = async (token) => {
    try {
      let response = await fetch("http://localhost:3001/users/me", {
        method: "GET",
        headers: {
          Authorization: `${token}`,
        },
      });
      let data = await response.json();
      console.log("data-->", data);
      let user = data;
      return user;
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="signup-cont">
      <div className="content-container-signup">
        <h1 className="signup-header pb-4 pt-2">Register</h1>
        <Form
          onSubmit={(e) => {
            submitRegister(e);
          }}
        >
          <Form.Control
            type="text"
            placeholder="Name..."
            className="fullName-input my-3"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <Form.Control
            type="text"
            placeholder="Surname..."
            className="fullName-input my-3"
            value={user.surname}
            onChange={(e) => setUser({ ...user, surname: e.target.value })}
          />
          <Form.Control
            type="text"
            placeholder="Email..."
            className="email-input my-3"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />

          <Form.Control
            type="password"
            placeholder="Password..."
            className="password-input my-3"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            
          />
          <Form.Control
            type="text"
            placeholder="Street..."
            className="fullName-input my-3"
            value={user.street}
            onChange={(e) => setUser({ ...user, street: e.target.value })}
            
          />
          <Form.Control
            type="text"
            placeholder="Number..."
            className="fullName-input my-3"
            value={user.number}
            onChange={(e) => setUser({ ...user, number: e.target.value })}
            
          />
          <Form.Control
            type="text"
            placeholder="Postcode..."
            className="fullName-input my-3"
            value={user.postcode}
            onChange={(e) => setUser({ ...user, postcode: e.target.value })}
            
          />
          <Form.Control
            type="text"
            placeholder="City..."
            className="fullName-input my-3"
            value={user.city}
            onChange={(e) => setUser({ ...user, city: e.target.value })}
            
          />
          <Button type="submit" className="log-in-btn my-2">
            Register
          </Button>
        </Form>
        <p className="not-a-member-p pt-4 pb-2 m-0">
          Already a member?{" "}
          <Link to="/login" className="link-login">
            Log in now!
          </Link>
        </p>
      </div>
    </div>
  );
}
