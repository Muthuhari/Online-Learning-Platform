import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Make sure this is imported for the JavaScript functionality

import '@fortawesome/fontawesome-free/css/all.css'; 
import Home from "./Components/Home/Home";
import AddCourse from "./Components/AddCourse/AddCourse";
import Courses from "./Components/CourseDetails/Courses";
import UpdateCourse from "./Components/UpdateCourse/UpdateCourse";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import ContactUs from "./Components/ContactUs/ContactUs";
import SendPdf from "./Components/SendPdf/SendPdf";
import Imguploder from "./Components/Imguploder/Imguploder";
import Course1 from "./Components/courseh/1";
function App() {
  return (
    <div>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mainhome" element={<Home />} />
          <Route path="/addCourse" element={<AddCourse />} />
          <Route path="/coursedetails" element={<Courses />} />
          <Route path="/conus" element={<ContactUs />} />
          <Route path="/sendpdf" element={<SendPdf />} />
          <Route path="/imgpart" element={<Imguploder />} />
          <Route path="/regi" element={<Register />} />
          <Route path="/log" element={<Login />} />
          <Route path="/courseh/1" element={<Course1 />}/>
          <Route path="/coursedeatils/:id" element={<UpdateCourse />}/>
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
