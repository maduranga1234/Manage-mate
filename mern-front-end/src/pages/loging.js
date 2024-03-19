import React, { useState } from 'react';
import './loging.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const navigate = useNavigate();

  const [username , setUsername]= useState('');
  const [password , setPassword]= useState('');


  const onChange=(event)=>{

   const { name, value } = event.target;

   switch(name){
    case 'username':
      setUsername(value);
      break;
    case 'password':
      setPassword(value);
      break;
   }

  }



  const loginClick = (event) => {

    const formData={
      username:username,
      password:password
    }

    if(!username || !password){
      alert("please enter your username and password")
    }else{
      axios.post(`http://localhost:8080/login`, formData)
    .then((response)=>{
      alert("login successfully!");
      navigate('/customer'); 
    })
    .catch((error)=>{
      alert("Login Fail");
                 
      console.error('Error saving data:', error);
    }); 
    }

   

    event.preventDefault();
  };


  const singupClick=()=>{
   
    navigate('/user'); 
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <input type="text" name="username" value={username} placeholder="Username"  onChange={onChange}required />
        <input type="password" name="password" value={password} placeholder="Password" onChange={onChange} required />
        <input type="submit" value="Login" onClick={loginClick}/>
        <h4 type="submit" onClick={singupClick} > Sing up</h4>
      </form>
    </div>
  );
}