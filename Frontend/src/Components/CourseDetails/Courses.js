import React, { useState, useEffect, useRef } from "react";
import Nav from "../Nav/Nav";
import axios from "axios";
import Course from '../Course/Course';
import Contacts from "../Contacts/Contacts";
import './Courses.css'; 
import { useReactToPrint } from "react-to-print";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:5000/users";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function Courses() {
  const [users, setUsers] = useState();
  const componentRef = useRef();  // useRef to create the reference
  const navigate = useNavigate();

  useEffect(() => {
    fetchHandler().then((data) => setUsers(data.users));
  }, []);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,  // correct usage of ref
    documentTitle: "Users Report",
    onAfterPrint: () => alert("Users Report Successfully Downloaded!")
  });


  const [searchQuery, setSearchQuery] = useState("");
  const [noResults, serNoResults] = useState(false);
  const handleSearch =() =>{
    fetchHandler().then((data) =>{
      const filteredUsers = data.users.filter((user)=>
      Object.values(user).some((field)=>
      field.toString().toLowerCase().includes(searchQuery.toLowerCase())
    ))
    setUsers(filteredUsers);
    serNoResults(filteredUsers.length === 0);
    });
  }

  const handleSendReport = () => {
    const phoneNumber = "+94768098273";
    const message = "Selected User drug report from here";
    
    const WhatsAppUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    
    window.open(WhatsAppUrl, "_blank");
  };
  const handleAddCourse = () => {
    navigate("/addCourse");
  };
  return (
    <div>
  <Nav />
  <h1>All Courses</h1>

  <div className="row mb-4">
    <div className="col-md-3">
  <button onClick={handleAddCourse} className="custom-btn">
    <i className="fas fa-plus me-2"></i> Add Course
  </button>
</div>

    <div className="col-md-6 d-flex justify-content-center">
  <div className="input-group" style={{ maxWidth: "400px", width: "100%" }}>
    <span className="input-group-text bg-light border-primary rounded-start">
      <i className="fas fa-search text-primary"></i>
    </span>
    <input
      onChange={(e) => setSearchQuery(e.target.value)}
      type="text"
      name="search"
      placeholder="Search course details"
      className="form-control border-primary"
    />
  </div>
  <button
    onClick={handleSearch}
    className="btn-search ms-3 rounded"
    style={{ height: "38px" }} /* Ensure consistent alignment */
  >
    Search
  </button>
</div>


    <div className="col-md-3">
    </div>
  </div>
  {noResults ? (
    <div>
      <p>No User Found</p>
    </div>
  ) : (
    <div ref={componentRef} className="row">
      {users && users.map((user, i) => (
        <div key={i} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
          <Course user={user} />
        </div>
      ))}
    </div>
  )}
  
<Contacts />
</div>

  );
}

export default Courses;
