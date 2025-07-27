// This section is currently unused.
// Added as a potential feature for future implementation based on demand.


const express = require("express");
const router = express.Router();
const SakhiApplication = require("../models/SakhiApplication");

router.post("/apply", async (req, res) => {
  try {
    const sakhi = new SakhiApplication(req.body);
    await sakhi.save();
    res.status(201).json({ message: "Sakhi application received!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error saving Sakhi application." });
  }
});

module.exports = router;