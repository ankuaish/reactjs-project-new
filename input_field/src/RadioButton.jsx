import { useState } from "react";

function RadioButton() {
  const [gender, setGender] = useState("female");
  return (
    <>
      <h1>Handle Radiobutton</h1>
      <h3>Selected Gender: {gender}</h3>
      <input
        type="radio"
        onChange={(event) => setGender(event.target.value)}
        name="gender"
        id="male"
        value={"male"}
        checked={gender == "male"}
      />
      <label htmlFor="male">Male</label>
      <input
        type="radio"
        name="gender"
        onChange={(event) => setGender(event.target.value)}
        id="female"
        value={"female"}
        checked={gender == "female"}
      />
      <label htmlFor="female">Female</label>
    </>
  );
}

export default RadioButton;
