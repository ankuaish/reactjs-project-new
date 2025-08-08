import { useState } from "react";

function CheckBox() {
  const [skills, setSkills] = useState([]);
  const handleClick = (event) => {
    if (event.target.checked) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((item) => item !== event.target.value));
    }
  };
  return (
    <div>
      <h1>Handle checkbox using state</h1>

      <input type="checkbox" onClick={handleClick} value={"dance"} id="dance" />
      <label htmlFor="dance">Dance</label>
      <br />
      <input type="checkbox" onClick={handleClick} value="music" id="music" />
      <label htmlFor="music">Music</label>
      <br />
      <input
        type="checkbox"
        onClick={handleClick}
        value="badminton"
        id="badminton"
      />
      <label htmlFor="badminton">Badminton</label>
      <br />
      <input
        type="checkbox"
        onClick={handleClick}
        value="reading"
        id="reading"
      />
      <label htmlFor="reading">Reading</label>
      <h1>{skills.toString()}</h1>
    </div>
  );
}

export default CheckBox;
