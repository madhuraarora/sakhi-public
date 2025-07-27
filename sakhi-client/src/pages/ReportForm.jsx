// This section is currently unused.
// Added as a potential feature for future implementation based on demand.

import React, { useState, useEffect } from "react";
import { useVolunteer } from "../context/VolunteerContext.jsx";
import { saveReportOffline, getAllUnsyncedReports, markReportsAsSynced } from "../utils/reportDB";
import { Link } from "react-router-dom";

function ReportForm() {
  const {
    isVolunteer,
    loginWithCredentials,
    logoutVolunteer,
    volunteerUsername
  } = useVolunteer();

  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    volunteer: "",
    date: "",
    location: "",
    summary: "",
    peopleReached: "",
    challenges: "",
    notes: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLoginSubmit = async (e) => {
  e.preventDefault();

  const success = await loginWithCredentials(loginData.username, loginData.password);
  if (!success) {
    setLoginError("Invalid credentials. Please try again.");
  }
};


  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5050/report/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("🌸 Field Report received loud and clear. You’re doing amazing work!");
      setSubmitted(true);
      setFormData({
        volunteer: "",
        date: "",
        location: "",
        summary: "",
        peopleReached: "",
        challenges: "",
        extraNotes: "",
      });
    } else {
      const error = await response.json();
      alert("Something went wrong: " + error.error);
    }
  } catch (err) {
    console.error(err);
    await saveReportOffline(formData);
  alert("Server error. Report saved offline and will sync when you're back online.");
}
};


  useEffect(() => {
    const handleOnline = async () => {
      const unsynced = await getAllUnsyncedReports();
      if (unsynced.length > 0) {
        console.log("Syncing reports:", unsynced);
        await markReportsAsSynced();
        alert(`${unsynced.length} report(s) synced to server.`);
      }
    };

    window.addEventListener("online", handleOnline);
    return () => window.removeEventListener("online", handleOnline);
  }, []);


  if (!isVolunteer) {
    return (
      <div style={{ padding: "2rem", maxWidth: "400px", margin: "auto" }}>
        <h2>Volunteer Login</h2>
        <form onSubmit={handleLoginSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input name="username" placeholder="Username" value={loginData.username} onChange={handleLoginChange} required />
          <input type="password" name="password" placeholder="Password" value={loginData.password} onChange={handleLoginChange} required />
          <button type="submit">Login</button>
          {loginError && <p style={{ color: "red" }}>{loginError}</p>}
        </form>
        <p style={{ marginTop: "1rem" }}>
          Not a volunteer?{" "}
          <Link to="/volunteer-apply" style={{ color: "#FF2F4F", textDecoration: "underline" }}>
            Apply here
          </Link>
        </p>
      </div>
    );
  }

  
  if (submitted) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Thank you for reporting in! <span style={{ color: "#FF90A1" }}>💗</span></h2>
        <p>You’re a hero in our books. Keep shining, we see you 🌟</p>
        <button onClick={() => setSubmitted(false)} style={{ marginTop: "1rem" }}>
          Submit Another Report
        </button>
      </div>
    );
  }

  
  return (
    <div style={{ padding: "2rem", maxWidth: "700px", margin: "auto" }}>
      <h2>Field Report</h2>
      <p style={{ fontSize: "0.9rem", color: "#555" }}>
        Logged in as: <strong>{volunteerUsername}</strong>
      </p>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input name="volunteer" type="text" placeholder="Your Full Name" value={formData.volunteer} onChange={handleChange} required />
        <input name="date" type="date" value={formData.date} onChange={handleChange} required />
        <input name="location" type="text" placeholder="Location" value={formData.location} onChange={handleChange} required />
        <textarea name="summary" placeholder="What was done today?" value={formData.summary} onChange={handleChange} required />
        <input name="peopleReached" type="number" placeholder="People Reached" value={formData.peopleReached} onChange={handleChange} required />
        <textarea name="challenges" placeholder="Any challenges faced?" value={formData.challenges} onChange={handleChange} />
        <textarea name="notes" placeholder="Anything you'd like us to know?" value={formData.notes} onChange={handleChange} />
        <button type="submit">Submit Report</button>
      </form>

      <button onClick={logoutVolunteer} style={{ marginTop: "1rem" }}>
        Logout
      </button>
    </div>
  );
}

export default ReportForm;

