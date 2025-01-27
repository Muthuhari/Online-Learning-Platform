import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import axios from "axios";
import './UpdateCourse.css'

function UpdateCourse() {
  const [inputs, setInputs] = useState({});
  const history = useNavigate();
  const id = useParams().id;

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/users/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.user));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    const response = await axios.put(`http://localhost:5000/users/${id}`, {
      name: inputs.name,
      gmail: inputs.gmail,
      age: inputs.age,
    });
    console.log(response.data); // Check if updated user data is returned correctly
  };

  const handleChange = (e) => {
    setInputs((prevState) => {
      const newInputs = {
        ...prevState,
        [e.target.name]: e.target.value,
      };
      console.log('Updated inputs:', newInputs); 
      return newInputs;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted');
    console.log(inputs);
    await sendRequest().then(() => history('/coursedetails'));
  };

  return (
    <div>
      <Nav />
      <div className="update-page">
      <h1>Update course</h1>
      <form onSubmit={handleSubmit}>
        <label>Course Name</label>
        <input type="text" name="name" onChange={handleChange} value={inputs.name || ''} required></input>
     
        <label>Course Details</label>
        <textarea type="gmail" name="gmail" onChange={handleChange} value={inputs.gmail || ''} required></textarea>
        
        <label>Cost</label>
        <input type="text" name="age" onChange={handleChange} value={inputs.age || ''} required></input>
        <div className="button-group">
        <button
          type="button"
          className="btn btn-secondary ms-2"
          onClick={() => history('/coursedetails')}
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-primary submit">Submit</button> 
      </div>
      </form>
    </div>
    </div>
  );
}

export default UpdateCourse;
