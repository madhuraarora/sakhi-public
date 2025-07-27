// This section is currently unused.
// Added as a potential feature for future implementation based on demand.


import React, { useState } from "react";

function SakhiForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    address: "",
    contact: ""
  });

  const [submitted] = useState(false);

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
    const response = await fetch("http://localhost:5050/sakhi/apply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("💖 You're in! We'll reach out soon with more details.");
      setFormData({
        name: "",
        age: "",
        address: "",
        contact: "",
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
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "auto" }}>
      <h2>Sakhi Participation Form</h2>

      {submitted ? (
        <p>
          Thank you for reaching out! One of us will be in touch with you very soon. <span style={{ color: "#FF90A1" }}>💗</span>
        </p>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            required
          />
          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact Details"
            value={formData.contact}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default SakhiForm;
