import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav"
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import './Register.css';
import Contacts from "../Contacts/Contacts";

function Register() {
  
  const history = useNavigate();
  const [user, setUser] = useState({
    name:"",
    gmail: "",
    password:"",

  })
  
  const handleInputChange =(e)=>{
    const {name, value} = e.target;
    setUser((prevUser)=> ({ ...prevUser,[name]: value }))
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    sendRequest().then(()=>{
      alert('Register Success');
      history('/coursedetails');
    }).catch((err)=>{
      alert(err.message);
    })

  }
  const sendRequest =async() =>{
    await axios.post("http://localhost:5000/register",{
      name: String (user.name),
      gmail: String (user.gmail),
      password: String (user.password),     
    }).then(res => res.data);
    console.log(user, "user check")
  }

  return (
    <div >
      <Nav />
   
    <div className="register-page">
      <div className="form-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={handleInputChange}
            value={user.name || ''}
            required
          />
          <label>Gmail</label>
          <input
            type="email"
            name="gmail"
            onChange={handleInputChange}
            value={user.gmail || ''}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={handleInputChange}
            value={user.password || ''}
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

export default Register