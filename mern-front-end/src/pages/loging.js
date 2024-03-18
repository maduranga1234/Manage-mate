import React from 'react';
import './loging.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const loginClick = (event) => {
    event.preventDefault();
   
    navigate('/customer'); 
  };


  const singupClick=()=>{
   
    navigate('/user'); 
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <input type="text" name="username" placeholder="Username" required />
        <input type="password" name="password" placeholder="Password" required />
        <input type="submit" value="Login" onClick={loginClick}/>
        <h4 type="submit" onClick={singupClick} > Sing up</h4>
      </form>
    </div>
  );
}