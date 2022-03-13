import React from "react";
import "./GetData.css";
import { selectUser } from "./features/useSlice";
import { useDispatch, useSelector } from "react-redux";

export default function GetData() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logOut);
  };
  return (
    <div className="container">
      {!user ? (
        "no user found"
      ) : (
        <>
          <h1>User:{user?.user_name}</h1>
          <h1>Email:{user?.user_email}</h1>
          <button onClick={logOut()}></button>
        </>
      )}
    </div>
  );
}
