import React from "react";
import { Link } from "react-router";

const PageNotFound = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Page Not Found</h1>
      <div>
        <Link to="/">Go to Home Page</Link>
      </div>
      <img
        style={{ width: "60%" }}
        src="https://admiral.digital/wp-content/uploads/2023/08/404_page-not-found.png"
        alt=""
      />
    </div>
  );
};

export default PageNotFound;
