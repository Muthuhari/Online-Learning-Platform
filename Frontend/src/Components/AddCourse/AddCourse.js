
import React,{useState} from "react";
import Nav from "../Nav/Nav";
import Contacts from "../Contacts/Contacts";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './AddCourse.css';
const URL ="http://localhost:5000/courses";


function AddCourse() {
    const history = useNavigate();
    const [inputs, setInputs] = useState ({
        name:"",
        description: "",
        cost:"",

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
      await axios.post("http://localhost:5000/courses",{
        name: String (inputs.name),
        description: String (inputs.description),
        cost: String (inputs.cost),
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
        <textarea type="text" name="description" onChange={handleChange} value={inputs.description} required></textarea>
        
        <label>Cost</label>
        <input type="text" name="cost" onChange={handleChange} value={inputs.cost} required></input>
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