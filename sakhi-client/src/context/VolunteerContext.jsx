import React, { createContext, useContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const VolunteerContext = createContext();

export const VolunteerProvider = ({ children }) => {
  const [isVolunteer, setIsVolunteer] = useState(false);
  const [volunteerUsername, setVolunteerUsername] = useState("");

  const loginWithCredentials = async (username, password) => {
    try {
      const res = await fetch("http://localhost:5050/volunteer/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("Login failed:", data.error);
        return false;
      }

      setIsVolunteer(true);
      setVolunteerUsername(username);
      return true;
    } catch (err) {
      console.error("Login error:", err);
      return false;
    }
  };

  const logoutVolunteer = () => {
    setIsVolunteer(false);
    setVolunteerUsername("");
  };

  console.log("VolunteerContext loaded");

  return (
    <VolunteerContext.Provider
      value={{
        isVolunteer,
        volunteerUsername,
        loginWithCredentials,
        logoutVolunteer
      }}
    >
      {children}
    </VolunteerContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useVolunteer = () => useContext(VolunteerContext);


