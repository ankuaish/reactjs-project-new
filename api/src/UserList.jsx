import React from "react";
import { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getUserData();
  }, []);
  const getUserData = async () => {
    const url = "http://localhost:3000/users";
    let response = await fetch(url);
    response = await response.json();
    setUser(response);
    setLoading(false);
  };
  return (
    <div>
      <h2>Fetch/Get Data from Json Server API and loader</h2>
      <ul className="user-list">
        <li> Name</li>
        <li>Age</li>
        <li>Email </li>
      </ul>
      {!loading ? (
        users &&
        users.map((item) => (
          <ul key={item.id} className="user-list">
            <li>{item.name}</li>
            <li>{item.age}</li>
            <li>{item.email}</li>
          </ul>
        ))
      ) : (
        <h1>Data Loading....</h1>
      )}
    </div>
  );
};

export default UserList;
