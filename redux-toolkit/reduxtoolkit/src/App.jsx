import "./App.css";
import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/useSlice";
import GetData from "./GetData";

function App() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const dispatch = useDispatch();
  const pushData = (e) => {
    e.preventDefaut();
    let name = nameRef.current.value;
    let email = emailRef.current.value;
    dispatch(
      login({
        user_name: name,
        user_email: email,
      })
    );
  };
  return (
    <div className="app">
      <h1>Redux</h1>
      <form>
        <div className="app-input">
          <label className="label">Name:</label>
          <input ref={nameRef} type="text" />
        </div>
        <div className="app-input">
          <label className="label">Email:</label>
          <input ref={emailRef} type="email" />
        </div>
        <button onClick={pushData()} type="submit" className="button">
          submit
        </button>
      </form>
      <GetData />
    </div>
  );
}

export default App;
