/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contactform.css";
// import API_BASE_URL from '../api'; // Keeping MERN stack logic for reference

function ContactForm() {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    reason: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xxxxx", //hidden    
        "template_xxxxx",  //hidden    
        form.current,
        "xxxx"       //hidden 
      )
      .then(
        () => {
          alert("Thanks for reaching out! Someone from Team Sakhi will be in touch soon.");
          setSubmitted(true);
          form.current.reset();
        },
        (error) => {
          console.error(error);
          alert("Something went wrong. Please try again.");
        }
      );

    // Previous MERN backend submission (commented for reference)
    /*
    try {
      const response = await fetch(`${xxxxx}/contact/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Thanks for reaching out! Someone from Team Sakhi will be in touch soon.");
        setSubmitted(true);
        setFormData({ name: "", contact: "", reason: "", message: "" });
      } else {
        const error = await response.json();
        alert("Something went wrong: " + error.error);
      }
    } catch (err) {
      console.error(err);
      alert("Server error. Please try again later.");
    }
    */
  };

  return (
    <div className="contact-page">
      <div className="contact-left">
        <h1 className="big-heading">Say Hello!</h1>
        <p className="info-block">
          Sakhi<br />
          Mumbai, India<br />
          For inquiries, collaborations,<br />
          or to learn more about our work
        </p>
        <div className="contact-footer">
          <div>sakhi.madhuraarora@gmail.com</div>
          <div>sakhi.anukalpchaturvedi@gmail.com</div>
          <div>(+91) 96000 47051</div>
        </div>
      </div>

      <div className="contact-right">
        <form ref={form} onSubmit={handleSubmit} className="contact-form">
          <label>Full Name</label>
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Contact Details</label>
          <input
            name="contact"
            type="text"
            placeholder="Phone, WhatsApp, or Email"
            value={formData.contact}
            onChange={handleChange}
            required
          />

          <label>Reason for Contact</label>
          <input
            name="reason"
            type="text"
            placeholder="Why you're reaching out"
            value={formData.reason}
            onChange={handleChange}
            required
          />

          <label>Your Message</label>
          <input
            name="message"
            type="text"
            placeholder="Briefly share your inquiry"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;