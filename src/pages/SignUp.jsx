import axios from 'axios';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
export default function SignUp() {
    const [username , setUsername] =  useState('');
    const [email , setEmail] =  useState('');
    const [password , setPassword] = useState('');
    const [dob , setDob] =  useState('');
    const [gender , setGender] = useState('');
    const handleGender = (e)=>{
        setGender(e.target.value);
    }
   const handelSubmit = async(e)=>{
    e.preventDefault();
    const userData = {username , email , password , dob , gender};
       const resp = await axios.post('http://localhost:8080/PostRequest',userData);
       console.log(resp);
   }
  return (
    <>   <form onSubmit={handelSubmit}>
        <label>USERNAME : </label>
        <input type='text' placeholder='Enter username' name='username' value={username} onChange={(e)=>{setUsername(e.target.value)}}/> 
        <br />  <br />
        <label>EMAIL : </label>
        <input type='email' placeholder='Enter Email' name='email' value={email} onChange={(e)=>{setEmail(e.target.value)} }/> 
        <br />  <br />
        <label>PASSWORD : </label>
        <input type='password' placeholder='Enter Password' name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} /> 
        <br />  <br />
        <label>DOB  : </label>
        <input type='date' name='dob' value={dob} onChange={(e)=>{setDob(e.target.value)}} /> 
        <br />  <br />
        <label>GENDER : </label>
         <label >M
         <input type="radio" name='gender' value="M"  checked={gender ==='M'} onChange={handleGender}/>
         </label>
         <label >F
         <input type="radio" name='gender' value="F"  checked={gender ==='F'} onChange={handleGender} />
         </label>
         <label >O
         <input type="radio" name='gender' value="O"  checked={gender ==='O'} onChange={handleGender} />
         </label>
        <br />  <br />
        <input type="submit" value='SignUp' />
        </form>
        <NavLink to="/">Login</NavLink>
    </>
  )
}
