import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Course.css'

function Course(props) {
  const { _id, name, description, cost } = props.user;
  const navigate = useNavigate();

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/courses/${_id}`)
      .then(res => res.data)
      .then(() => navigate("/"))
      .then(() => navigate("/coursedetails")); 
  };
  const truncateText = (text, charLimit) => {
    if (text.length > charLimit) {
      return text.slice(0, charLimit) + "...";
    }
    return text;
  };

  return (
    <div className="card">
      <div className="card-header">
        <h6 className="card-title">{name}</h6>
      </div>
      <div className="card-body">
        <p className="card-text">
          <strong></strong> {truncateText(description, 150)}
        </p>
        <p className="card-age"> <strong>$</strong>{cost}</p>
        <p className="course-rating1">Rating: {4.9} <span className="star">★</span></p>
      </div>

      <div className="card-footer d-flex justify-content-end">
        <Link to={`/coursedeatils/${_id}`} className="btn btn-primary update-button">Update</Link>
        <button
          type="button"
          className="btn btn-danger ms-2"
          onClick={deleteHandler} 
        >
          Delete
        </button>
      </div>
    </div>

  );
}

export default Course;
