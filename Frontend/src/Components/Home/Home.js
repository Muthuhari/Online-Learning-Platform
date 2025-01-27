import React from 'react';
import Nav from '../Nav/Nav';
import Contacts from "../Contacts/Contacts";
import './Home.css'; 
import { useNavigate } from "react-router-dom";
function Home() {

  const navigate = useNavigate();
  const courses = [
    {
      id: 1,
      image: '/img/img1.jpg', 
      title: 'React for Beginners',
      content: 'Learn the basics of React, a popular JavaScript library.',
      rating: 4.5,
    },
    {
      id: 2,
      image: '/img/img2.jpg',
      title: 'Advanced HTML & CSS',
      content: 'Deep dive into advanced concepts of JavaScript.',
      rating: 4.7,
    },
    {
      id: 3,
      image: '/img/img3.png',
      title: 'UI/UX Fundamentals',
      content: 'Master the principles of user interface and experience design.',
      rating: 4.8,
    },
    {
      id: 4,
      image: '/img/img4.jpg',
      title: 'Advanced JavaScript',
      content: 'Deep dive into advanced concepts of JavaScript.',
      rating: 4.7,
    },
    {
      id: 5,
      image: '/img/img5.jpg', 
      title: 'ML/ AL Beginners',
      content: 'Learn the basics of Machine Learning and Artificial intelligence.',
      rating: 4.5,
    },
    {
      id: 6,
      image: '/img/img6.jpg',
      title: 'Cyber certifications',
      content: 'Deep dive into advanced concepts of Cyber Security.',
      rating: 4.7,
    },
    {
      id: 7,
      image: '/img/img7.jpg',
      title: 'Advanced Java',
      content: 'Deep dive into advanced concepts of JavaScript',
      rating: 4.8,
    },
    {
      id: 8,
      image: '/img/img8.jpg',
      title: 'Vscode Essentials',
      content: 'Learn basic into advanced concepts of Vscode Essentials.',
      rating: 4.7,
    },
    {
      id: 9,
      image: '/img/img9.jpg',
      title: 'MERN stack full course',
      content: 'Deep dive into advanced concepts of MERN stack.',
      rating: 4.7,
    },
    {
      id: 10,
      image: '/img/img10.jpg',
      title: 'MongoDB Tutorial',
      content: 'Deep dive into advanced concepts of MongoDB.',
      rating: 4.7,
    },
  ];
  return (
    <div>
      <Nav />
      <header className="home-header">
      <div className="hero-content">
          <h1 className="home-title">Welcome to E-learning Hub</h1>
          </div>
        <div>
          <div>
          <p className="home-description">
            Discover a world of knowledge at your fingertips. Learn anytime, anywhere, at your own pace.
          </p>
          <div className="home-buttons">
            <button className="btn primary-btn" onClick={() => navigate(`/coursedetails`)}>As a Teacher</button>
            <button className="btn secondary-btn">As a Student</button>
          </div>
          </div>
          <div className="hero-img">
        <img
          src="/img/elearning.png"
          alt="Hero"
          className="hero-image"
        />
         </div>
        </div>
      </header>
      <section className="home-features">
        <h2>Why Choose Us?</h2>
        <div className="features-container">
          <div className="feature-item">
            <h3>Expert Instructors</h3>
            <p>Learn from industry professionals with years of experience.</p>
          </div>
          <div className="feature-item">
            <h3>Interactive Learning</h3>
            <p>Engage with multimedia-rich content, quizzes, and live sessions.</p>
          </div>
          <div className="feature-item">
            <h3>Flexible Schedule</h3>
            <p>Study at your own pace with on-demand courses.</p>
          </div>
        </div>
      </section>
      <section className="course-section">
        <h2>Our Courses</h2>
        <div className="course-container">
          {courses.map((course) => (
            <div key={course.id} className="course-card" onClick={() => navigate(`/courseh/${course.id}`)}>
              <img src={course.image} alt={course.title} className="course-image" />
              <h3 className="course-title">{course.title}</h3>
              <p className="course-content">{course.content}</p>
              <p className="course-ratingH">Rating: {course.rating}<span className="starH">★</span></p>
              {/* onClick={() => history('/coursedetails')}  */}
            </div>
          ))}
        </div>
      </section>
      <Contacts />
    </div>
  );





}

export default Home;
