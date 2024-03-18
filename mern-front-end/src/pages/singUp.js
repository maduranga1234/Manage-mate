import React, { useState } from 'react';
import './singUp.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SignUp() {

    const navigate = useNavigate();


    const[firstname ,setFirstName]=useState('');
    const[lastname ,setLastname]=useState('');
    const[address ,setAddress]=useState('');
    const[username ,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const[conformPassword ,setConformPassword]=useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
    
        switch (name) {
          case 'firstname':
            setFirstName(value);
            break;
          case 'lastname':
            setLastname(value);
            break;
          case 'address':
            setAddress(value);
            break;
          case 'username':
            setUsername(value);
            break;
         case 'password':
            setPassword(value);
            break;
         case 'conformPassword':
            setConformPassword(value);
            break;
          default:
            break;
        }
      };


      const singUpClick=()=>{

        const formData = {
            firstname: firstname,
            lastname: lastname,
            address: address,
            username:username,
            password:password,
            conformPassword:conformPassword,
            
          };
    
          console.log(formData);
          
    
          if (!firstname || !lastname || !address || !username || !password || !conformPassword) {
             

            alert("Please fill in all fields before saving.");
          } else if(password !== conformPassword){
            alert("password not match");
          }
          
          else {   
        axios.post(`http://localhost:8080/user/post`,formData)
        
        .then((response) => {
            
            alert("Save successfully!");
             navigate('/');
            
           
        })
        .catch((error) => {
          console.error('Error saving data:', error);
        });
        navigate('/'); 
    
    }

   


      }
     


  const loginClick=()=>{
   navigate('/');

 
  }

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form>
        <input type="text" name="firstname" value={firstname} placeholder="First Name" required onChange={handleInputChange}/>
        <input type="text" name="lastname" value={lastname} placeholder="Last Name" required onChange={handleInputChange} />
        <input type="text" name="address" value={address} placeholder="Address" required onChange={handleInputChange} />
        <input type="text" name="username" value={username} placeholder="Username" required  onChange={handleInputChange}/>
        <input type="password" name="password" value={password} placeholder="Password" required onChange={handleInputChange}/>
        <input type="password" name="conformPassword" value={conformPassword} placeholder="Confirm Password" required  onChange={handleInputChange}/>
        <input type="submit" value="Sign Up" onClick={ singUpClick} />

        <h4 type="submit" onClick={loginClick} > Login</h4>

      </form>
    </div>
  );
}
