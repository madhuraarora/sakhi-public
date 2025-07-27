// This section is currently unused.
// Added as a potential feature for future implementation based on demand.


const express = require("express");
const router = express.Router();
const VolunteerApplication = require("../models/VolunteerApplication");
const crypto = require("crypto");

router.post("/apply", async (req, res) => {
  try {
    const data = req.body;
    const newApp = new VolunteerApplication(data);
    await newApp.save();
    res.status(201).json({ message: "Volunteer application submitted!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Could not save volunteer application" });
  }
});

router.post("/approve/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const username = crypto.randomBytes(3).toString("hex"); 
    const password = crypto.randomBytes(3).toString("base64").slice(0, 5); 

    const updated = await VolunteerApplication.findByIdAndUpdate(
      id,
      { approved: true, username, password },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ error: "Volunteer not found." });
    }

    res.status(200).json({
      message: "Volunteer approved successfully!",
      credentials: {
        username: updated.username,
        password: updated.password
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Could not approve volunteer." });
  }
});

// Volunteer login route
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const volunteer = await VolunteerApplication.findOne({ username, password, approved: true });

    if (!volunteer) {
      return res.status(401).json({ error: "Invalid credentials or not approved" });
    }

    res.status(200).json({ message: "Login successful" });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Server error" });
  }
});


module.exports = router;





