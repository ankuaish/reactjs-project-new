import React from "react";
import { useParams, Link } from "react-router";

const UserDetail = () => {
  const paramData = useParams();
  return (
    <>
      <div style={{ marginLeft: 20 }}>
        <h1>UserDetail Page</h1>
        <h2>User id is : {paramData.id}</h2>
        <h4>
          <Link to={"/users"}>Back to User List</Link>
        </h4>
      </div>
    </>
  );
};

export default UserDetail;
