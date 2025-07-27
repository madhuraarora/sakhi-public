import React from "react";
import ComingSoonStrip from "./comingsoonstrip.jsx";
import "../styles/comingsoon.css";

function VolunteerComingSoon() {
  return (
    <div className="volunteer-coming-soon-page">
      <ComingSoonStrip />

      <div className="volunteer-coming-soon-body">
        <p className="volunteer-subtitle">THANK YOU FOR YOUR INTEREST</p>
        <h1 className="volunteer-title">VOLUNTEER SIGN-UPS<br />LAUNCHING SOON.</h1>
        <p className="volunteer-caption">Stay tuned!</p>
      </div>
    </div>
  );
}

export default VolunteerComingSoon;
