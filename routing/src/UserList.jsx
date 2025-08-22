import React from "react";
import { Link } from "react-router";

const UserList = () => {
  const userData = [
    { id: 1, name: "aish " },
    { id: 2, name: "aishu " },
    { id: 3, name: "aisha " },
    { id: 4, name: "aishhh " },
    { id: 5, name: "aishwarya " },
    { id: 6, name: "aishi " },
  ];

  return (
    <div style={{ marginLeft: 20 }}>
      <h1>UserList Page</h1>
      {userData.map((item, index) => (
        <div>
          <h2 key={index}>
            <Link to={"/users/" + item.id}>{item.name}</Link>
          </h2>
        </div>
      ))}

      <h1>UserList Page with dynamic Optional Segment</h1>
      {userData.map((item, index) => (
        <div>
          <h2 key={index}>
            <Link to={"/users/" + item.id + "/" + item.name}>{item.name}</Link>
          </h2>
        </div>
      ))}
    </div>
  );
};

export default UserList;
