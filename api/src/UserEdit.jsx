import React from 'react'
import { useParams } from 'react-router'
import { useState } from 'react'
import { useEffect } from 'react'
import {useNavigate} from "react-router-dom"

const UserEdit = () => {
    const {id} =useParams();
    const navigate = useNavigate();

      const[name, setName]= useState('');
      const[age, setAge]= useState('');
      const[email, setEmail]= useState('');

      useEffect(() =>{
        getUserData();
      },[]);


       const url="http://localhost:3000/user/"+id;
    const getUserData = async() =>{
       
        let response = await fetch(url);
        response = await response.json();

        setName(response.name);
        setAge(response.age);
        setEmail(response.email);

    }

    const updateUser= async() =>{
let response = await fetch(url, {
  method:"put",
  body:JSON.stringify({name, email, age})
});

const data  = await response.json();


if(data){alert("User Updated")
    navigate("/")
}

    }
  return (
   <div style={{textAlign:'center'}}>
    <h1>Edit User Details</h1>
    <input type="text"  value ={name} onChange={(e) => setName(e.target.value)} placeholder='enter your name' />
    <br />
     <input type="text" value ={age}   onChange={(e) => setAge(e.target.value)}  placeholder='enter your age' />
     <br />
      <input type="email" value ={email} onChange={(e) => setEmail(e.target.value)}  placeholder='enter your email' />
      <br />
      <button onClick={updateUser}>Update user</button>
   </div>
  )
}

export default UserEdit