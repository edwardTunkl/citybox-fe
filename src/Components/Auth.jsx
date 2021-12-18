import React from "react";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ elementToRender }) {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [fetchingUser, setFetchingUser] = useState(true);

  const abort = new AbortController();

  useEffect(() => {
    const auth = async () => {
      try {
        let req = await fetch(process.env.REACT_APP_BE_URL + "/users/me", {
          signal: abort.signal,
          method: "GET",
          headers: { Authorization: localStorage.getItem("token") }
        });

        if (req.ok) {
          let data = await req.json();
          if (data) {
            setAuthenticated(true);
            setFetchingUser(false);
          }
        } else {
          setFetchingUser(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    auth();
  }, []);

  useEffect(() => {
    if (!fetchingUser)
      return () => {
        abort.abort();
      };
  });

  return (
    <>
      {isAuthenticated && elementToRender}
      {!fetchingUser && !isAuthenticated && <Navigate to="/login" />}
    </>
  );
}

export default ProtectedRoute;
