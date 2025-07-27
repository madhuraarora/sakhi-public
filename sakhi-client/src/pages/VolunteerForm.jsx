// This section is currently unused.
// Added as a potential feature for future implementation based on demand.

import React, { useState } from "react";

function VolunteerForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    education: "",
    areas: "",
    phone: "",
    email: "",
    availability: "",
    experience: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5050/volunteer/apply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Thanks for applying! We'll reach out to you shortly 💌");
      setSubmitted(true);
      setFormData({
        name: "",
        age: "",
        gender: "",
        education: "",
        areas: "",
        phone: "",
        email: "",
        availability: "",
        experience: "",
      });
    } else {
      const error = await response.json();
      alert("Something went wrong: " + error.error);
    }
  } catch (err) {
    console.error(err);
    alert("Server error. Please try again later.");
  }
};


  return (
    <div style={{ padding: "2rem", maxWidth: "700px", margin: "auto" }}>
      <h2>Sakhi Volunteer Participation Form</h2>

      {submitted ? (
        <p>
          Thank you for reaching out! One of us will be in touch with you very soon.{" "}
          <span style={{ color: "#FF90A1" }}>💗</span>
        </p>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input name="name" type="text" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          <input name="age" type="number" placeholder="Age (Must be 18 or older)" value={formData.age} onChange={handleChange} required />
          <input name="gender" type="text" placeholder="Gender (e.g., Female, Male, Other)" value={formData.gender} onChange={handleChange} required />
          <input name="education" type="text" placeholder="Education Level (e.g., Primary, Secondary, College)" value={formData.education} onChange={handleChange} required />
          <textarea name="areas" placeholder="Areas of Mumbai you're comfortable travelling to" value={formData.areas} onChange={handleChange} required />
          <input name="phone" type="text" placeholder="Phone Number (WhatsApp preferred)" value={formData.phone} onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
          <input name="availability" type="text" placeholder="Availability (e.g., 5 hours, 10 hours, or flexible)" value={formData.availability} onChange={handleChange} required />
          <textarea name="experience" placeholder="Experience with community engagement? If none, write 'No'" value={formData.experience} onChange={handleChange} required />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}




  

export default VolunteerForm;