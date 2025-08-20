import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Derived } from "./Derived";
import UseAction from "./UseAction";

function App() {
  return (
    <>
      <Derived />
      <UseAction />
    </>
  );
}

export default App;
