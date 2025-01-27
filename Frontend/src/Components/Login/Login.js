import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav"
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import './Login.css'; 
import Contacts from "../Contacts/Contacts";

function Login() {
  
  const history = useNavigate();
  const [user, setUser] = useState({
    gmail: "",
    password: "" 

  })
  
  const handleInputChange =(e)=>{
    const {name, value} = e.target;
    setUser((prevUser)=> ({ ...prevUser,[name]: value }))
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
      const response = await  sendRequest();
      if (response.status === "ok")
      {
      alert('Login Success');
      history('/coursedetails');
    }else{
      alert('Login Error');
    }
    } catch (err) {
      alert( "error" + err.message);
    }

  }
  const sendRequest = async() =>{
    return await axios
    .post("http://localhost:5000/login",{
      gmail: user.gmail,
      password: user.password,     
    }).then(res => res.data);
  }

  return (
    <div>
      <Nav />
    <div className="login-page">
      <div className="form-container">
        <h1>User Login</h1>
        <form onSubmit={handleSubmit}>
          <label>Gmail</label>
          <input
            type="email"
            name="gmail"
            onChange={handleInputChange}
            value={user.gmail}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={handleInputChange}
            value={user.password}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    <Contacts/>
    </div>
    
  )
}

export default Login