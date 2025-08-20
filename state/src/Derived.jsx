import React, { useState } from "react";

export const Derived = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");

  const handleButton = () => {
    setUsers([...users, user]);
  };
  const total = users.length;
  const last = users[users.length - 1];
  const unique = [...new Set(users)].length;
  return (
    <div>
      <h2>Total User : {total}</h2>
      <h2>Last User : {last}</h2>
      <h2>Total Unique User : {unique}</h2>
      <input
        type="text"
        onChange={(event) => setUser(event.target.value)}
        placeholder="Enter name "
      />
      <button onClick={handleButton}>Add User</button>
      {users.map((item, index) => (
        <h2 key={index}>{item}</h2>
      ))}
    </div>
  );
};
