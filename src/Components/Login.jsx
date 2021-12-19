import React from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch} from "react-redux";
import { getRequest, setUserInfo, setUserItems } from "../redux/actions";
import { useState } from "react";
import "../styling/login.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [logIn, setLogIn] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(process.env.REACT_APP_BE_URL + `/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(logIn),
      });
      if (response.ok) {
        let data = await response.json();
        console.log("data", data);
        localStorage.setItem("token", data.accessToken);
        console.log(localStorage.getItem("token"));
        let user = await findUserFromToken(data.accessToken);
        if (user) {
          dispatch(setUserInfo(user));
        }
        setTimeout(function () {
          dispatch(setUserItems())
          dispatch(getRequest())
          navigate("/");
        }, 200);
      } else {
        console.log("Something went wrong...");
      }
    } catch (err) {
      console.log(err);
    }
  };

   const findUserFromToken = async (token) => {
    try {
      let response = await fetch(process.env.REACT_APP_BE_URL + `/users/me`, {
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
    <div className="loggin-cont">
      <div className="content-loggin-cont">
        
        <h1 className="loggin-header py-4">Welcome to <span className="cityBox">City</span>Box!</h1>
        <Form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <Form.Control
            type="text"
            placeholder="Email"
            className="email-input my-3"
            value={logIn.email}
            // onChange={(e) => handleOnChange(e, "email")}
            onChange={(e) => setLogIn({ ...logIn, email: e.target.value })}
          />
          <Form.Control
            type="password"
            placeholder="Password"
            className="password-input my-3"
            value={logIn.password}
            // onChange={(e) => handleOnChange(e, "password")}
            onChange={(e) => setLogIn({ ...logIn, password: e.target.value })}
          />
          <Form.Check
            type="checkbox"
            label="Remember me"
            className="check-input my-3"
          />
          <Button type="submit" className="log-in-btn my-2">
            LOGIN
          </Button>
        </Form>
        <p className="className='not-a-member-p p-5 m-0">
          Not a member?{" "}
          <Link to="/register" className="link-register">
            Sign up now!
          </Link>
        </p>
      </div>
    </div>
  );
}
