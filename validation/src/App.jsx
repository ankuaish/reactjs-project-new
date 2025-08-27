import { useState } from "react";

import "./App.css";
import UseAct from "./UseAct";

function App() {
  const [nameErr, setNameErr] = useState();

  const [passErr, setPassErr] = useState();

  const handleName = (event) => {
    if (event.target.value.length > 5) {
      setNameErr("Please enter valid user name only 5 characters allowed");
    } else {
      setNameErr("");
    }
  };

  const handlePass = (event) => {
    let regex = /^[A-Z0-9]+$/i;
    if (regex.test(event.target.value)) {
      setPassErr("");
    } else {
      setPassErr("Please enter numbers and alphabet only");
    }
  };
  return (
    <>
      <div>
        <input
          type="text"
          className={nameErr ? "error" : ""}
          onChange={handleName}
          placeholder="enter your name"
        />
        <span style={{ color: "red" }}>{nameErr && nameErr}</span>
        <br />
        <br />
        <input
          type="text"
          className={passErr ? "error" : ""}
          onChange={handlePass}
          placeholder="enter your password"
        />
        <span style={{ color: "red" }}>{passErr && passErr}</span>
        <br />
        <br />
        <button disabled={nameErr || passErr}>Login</button>
      </div>

      <UseAct />
    </>
  );
}

export default App;
