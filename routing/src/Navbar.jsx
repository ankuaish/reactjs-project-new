import React from "react";
import { Link, NavLink, Outlet } from "react-router";

const Navbar = () => {
  return (
    <>
      <div className="header">
        <div>
          <NavLink className="link" to={"/"}>
            <h2>Logo</h2>
          </NavLink>
        </div>
        <div>
          <ul>
            <li>
              <NavLink className="link" to={"/"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "custom_active link" : "link"
                }
                to={"/about"}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to={"/in/user/login"}>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to={"/college"}>
                College
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to={"/users"}>
                Users
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to={"/users/list"}>
                List
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
