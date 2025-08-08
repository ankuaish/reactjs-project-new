import { useState } from "react";

function DropDown() {
  const [city, setCity] = useState("delhi");
  return (
    <>
      <h1>Handle dropdown</h1>
      <h3>Select city : {city}</h3>
      <select
        onChange={(event) => setCity(event.target.value)}
        defaultValue={"delhi"}
      >
        <option value={"mumbai"}> Mumbai</option>
        <option value={"delhi"}> Delhi</option>
        <option value={"goa"}> Goa</option>
      </select>
    </>
  );
}

export default DropDown;
