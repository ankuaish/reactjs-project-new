import React, { useState } from 'react'

const UserAdd = () => {

  const[name, setName]= useState('');
  const[age, setAge]= useState('');
  const[email, setEmail]= useState('');

  const createUser =async ()=>{
    const url ="http://localhost:3000/user"
let response =await fetch (url, {
  method:"Post",
  body:JSON.stringify({name, email, age})
})


const data  = await response.json();


if(data){alert("new user added")}
  }
  return (
   <>
   <div style={{textAlign:'center'}}>
    <h1>Add User</h1>
    <input type="text" onChange={(event)=> setName(event.target.value)} placeholder='enter your name' />
    <br />
     <input type="text" onChange={(event)=> setAge(event.target.value)} placeholder='enter your age' />
     <br />
      <input type="email" onChange={(event)=> setEmail(event.target.value)} placeholder='enter your email' />
      <br />
      <button onClick={createUser}>Add user</button>
   </div>
   </>
  )
}

export default UserAdd