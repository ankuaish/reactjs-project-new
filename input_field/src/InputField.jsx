import { useState } from "react";
function InputField() {
  const [val, setVal] = useState();
  return (
    <>
      <h1>Get Input Field</h1>
      <input
        type="text"
        placeholder="Enter your name "
        onChange={(event) => setVal(event.target.value)}
        value={val}
      />
      <h1>{val}</h1>
      <button
        onClick={() => {
          setVal("");
        }}
      >
        Clear Value
      </button>
    </>
  );
}

export default InputField;
