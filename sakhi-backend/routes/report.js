// This section is currently unused.
// Added as a potential feature for future implementation based on demand.


const express = require("express");
const router = express.Router();
const FieldReport = require("../models/FieldReport");

router.post("/submit", async (req, res) => {
  try {
    const report = new FieldReport(req.body);
    await report.save();
    res.status(201).json({ message: "Report saved!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error saving report." });
  }
});

module.exports = router;
