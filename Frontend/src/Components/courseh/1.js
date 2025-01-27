import React, { useState } from "react";
import "./Course1.css";
import Nav from "../Nav/Nav";

function Course1() {
  const [showModal, setShowModal] = useState(false);

  const course = {
    title: "React for Beginners",
    image: "/img/img1.jpg",
    description:
      "This course provides an in-depth introduction to React, one of the most popular JavaScript libraries for building user interfaces. You'll learn how to create dynamic web applications with reusable components.",
    features: [
      "Understand the basics of React",
      "Build reusable components",
      "State management using hooks",
      "React Router for navigation",
      "Deploy your React app",
    ],
    rating: 4.8,
    price: "$19.99",
  };

  return (
    <div>
         <Nav />
    
    <div className="course1-page container">
      <div className="row">
        {/* Course Image */}
        <div className="col-md-6">
          <img
            src={course.image}
            alt={course.title}
            className="img-fluid course1-images"
          />
        </div>

        {/* Course Details */}
        <div className="col-md-6">
          <h1 className="course1-title">{course.title}</h1>
          <p className="course1-rating">Rating: {course.rating} ★</p>
          <p className="course1-description">{course.description}</p>
          <h5>What you'll learn:</h5>
          <ul className="course1-features">
            {course.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <div className="course1-buy-section">
            <p className="course1-price">{course.price}</p>
            <button
              className="btn buy-now-btn"
              onClick={() => setShowModal(true)}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-popup">
            <h3>Payment Details</h3>
            <p>
              You are purchasing <strong>{course.title}</strong> for{" "}
              <strong>{course.price}</strong>.
            </p>
            <div className="payment-options">
              <h5>Choose a payment method:</h5>
              <ul>
                <li>Credit/Debit Card</li>
                <li>PayPal</li>
                <li>Net Banking</li>
              </ul>
            </div>
            <div className="modal-actions">
              <button
                className="btn close-btn"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button className="btn confirm-btn">Confirm Purchase</button>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}

export default Course1;


