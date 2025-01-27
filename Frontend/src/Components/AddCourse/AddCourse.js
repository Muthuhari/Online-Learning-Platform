
import React,{useState} from "react";
import Nav from "../Nav/Nav";
import Contacts from "../Contacts/Contacts";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './AddCourse.css';
const URL ="http://localhost:5000/users";


function AddCourse() {
    const history = useNavigate();
    const [inputs, setInputs] = useState ({
        name:"",
        gmail: "",
        age:"",

    })

    const handleChange =(e)=>{
      setInputs((prevState)=> ({
        ...prevState,
        [e.target.name]: e.target.value,

      }))
    }

    const handleSubmit = async (e)=>{
      e.preventDefault();
      console.log(inputs);
      sendRequest().then(() => history('/coursedetails'));
    }


    const sendRequest =async() =>{
      await axios.post("http://localhost:5000/users",{
        name: String (inputs.name),
        gmail: String (inputs.gmail),
        age: String (inputs.age),
        address: String (inputs.address),      
      }).then(res => res.data);
    }

  return (
    <div>
      <Nav />
      <div className="add-page">
      <h1>Add Course</h1>
      <form onSubmit={handleSubmit}>
        <label>Course Name</label>
        <input type="text" name="name" onChange={handleChange} value={inputs.name} required></input>
     
        <label>Course Details</label>
        <textarea type="gmail" name="gmail" onChange={handleChange} value={inputs.gmail} required></textarea>
        
        <label>Cost</label>
        <input type="text" name="age" onChange={handleChange} value={inputs.age} required></input>
        <div className="button-group">
        <button
          type="button"
          className="btn btn-secondary ms-2"
          onClick={() => history('/coursedetails')} // Redirect to another page
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-primary submit">Submit</button> 
      </div>
      </form>
      </div>
      <Contacts />
    </div>
  );
}

export default AddCourse;