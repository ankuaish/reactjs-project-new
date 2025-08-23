import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    getUserData();
  }, []);
  const getUserData = async () => {
    const url = "https://dummyjson.com/users";
    let response = await fetch(url);
    response = await response.json();
    setUser(response.users);
  };
  return (
    <>
      <h2>Fetch/Get Data from API</h2>
      <ul className="user-list">
        <li>First Name</li>
        <li>Last Name </li>
        <li>Age</li>
      </ul>
      {users.map((item, index) => (
        <ul key={index} className="user-list">
          <li>{item.firstName}</li>
          <li>{item.lastName}</li>
          <li>{item.age}</li>
        </ul>
      ))}
    </>
  );
}

export default App;
