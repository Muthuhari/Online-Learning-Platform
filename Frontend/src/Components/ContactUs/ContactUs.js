import React, { useState, useEffect,useRef  } from "react";
import Nav from "../Nav/Nav"
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom'
import axios from "axios";

function ContactUs() {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_lfrwudb', 'template_lfeuldk', form.current, {
        publicKey: 'Ils_Zl5aDy5Ik_9bm',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Success")
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Not Send")
        },
      );
  };

  return (
    <div>
      <Nav/>
      <h1>ContactUs</h1>
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <br></br>
      <input type="text" name="user_name" /><br></br>
      <label>Email</label>
      <br></br>
      <input type="email" name="user_email" /><br></br>
      <label>Message</label>
      <br></br>
      <textarea name="message" /><br></br>
      <br></br>
      <input type="submit" value="Send" />
    </form>
    </div>
  )
}

export default ContactUs