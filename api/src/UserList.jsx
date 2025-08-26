import React from "react";
import { useEffect, useState} from "react";
import {useNavigate} from "react-router-dom"


const UserList = () => {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getUserData();
  }, []);

const url = "http://localhost:3000/user";
  const getUserData = async () => {
    
    let response = await fetch(url);
    response = await response.json();
    setUser(response);
    setLoading(false);
  };
 
const deleteUser = async(id)=>{
 let response = await fetch(url+"/"+id, {
  method:"delete",
 });
    const data  = await response.json();
    if(data){
      alert("record deleted");
 getUserData();
    }
   
}

const editUser=(id)=>{
navigate("/edit/"+ id)
}

  return (
    <div>
      <h2>Fetch/Get Data from Json Server API and loader</h2>
      <ul className="user-list">
        <li> Name</li>
        <li>Age</li>
        <li>Email </li>
        <li>Action</li>
      </ul>
      {!loading ? (
        users &&
        users.map((item) => (
          <ul key={item.id} className="user-list">
            <li>{item.name}</li>
            <li>{item.age}</li>
            <li>{item.email}</li>
            <li>   <button onClick={() => deleteUser(item.id)}>Delete</button>
             <button onClick={() => editUser(item.id)}>Edit</button></li>
          </ul>
        ))
      ) : (
        <h1>Data Loading....</h1>
      )}
    </div>
  );
};

export default UserList;
