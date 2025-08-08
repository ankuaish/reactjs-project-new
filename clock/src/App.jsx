import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Clock } from "./Clock";

function App() {
  const [color, setColor] = useState("yellow");

  return (
    <>
      <select
        onChange={(event) => setColor(event.target.value)}
        defaultValue={"yellow"}
      >
        <option value="green">Green</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
      </select>
      <Clock color={color} />
    </>
  );
}

export default App;
