import { useState } from "react";
import College from "./College";
import { SubjectContext } from "./ContextData";

export default function App() {
  const [subject, setSubject] = useState("");
  return (
    <div style={{ backgroundColor: "yellow", padding: 10 }}>
      <SubjectContext.Provider value={subject}>
        <select
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
        >
          <option value="">Select Subject</option>
          <option value="Maths">Maths</option>
          <option value="History">History</option>
          <option value="English">English</option>
        </select>

        <button onClick={() => setSubject("")}>Clear Subject</button>
        <h1>Context API</h1>

        <College />
      </SubjectContext.Provider>
    </div>
  );
}
