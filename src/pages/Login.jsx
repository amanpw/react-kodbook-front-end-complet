import axios from 'axios';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Login() {
    const [username , setUsername] =  useState('');
    const [password , setPassword] = useState('');
   const navigate = useNavigate(); // Hook to programmatically navigate
    const handleSubmit = async (e)=>{
      e.preventDefault();
      const userData = {username , password};
       const response = await axios.post('http://localhost:8080/checkUser',userData);
       if(response.data ==='valid'){
            navigate('/home');
          alert("login sucessfully")
       }else{
          alert('/login')
           alert('please enter valid data')
       }
         console.log(response);
    }
    
  return (
    <>  <form onSubmit={handleSubmit}>
        <label>USERNAME : </label>
        <input type='text' placeholder='Enter username' name='username' value={username} onChange={(e)=>{setUsername(e.target.value)}} /> 
        <br />  <br />
        <label>PASSWORD : </label>
        <input type='password' placeholder='Enter Password' name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} /> 
        <br />  <br />
        <input type="submit" value='login' />
        </form>
        <NavLink to='/SignUp'>Create an account</NavLink>
    </>
  );
}
