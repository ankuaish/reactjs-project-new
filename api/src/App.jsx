import "./App.css";
import UserAdd from "./UserAdd";
import UserList from "./UserList";
import { Routes, Route, NavLink } from "react-router";

function App() {
  return (
    <>
      <div className="bich">
        <ul className="list">
          <li>
            <NavLink to={"/"}>List</NavLink>
          </li>
          <li>
            <NavLink to={"/add"}>Add User</NavLink>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/add" element={<UserAdd />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
