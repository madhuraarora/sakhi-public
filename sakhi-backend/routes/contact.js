
const express = require("express");
const router = express.Router();
const ContactMessage = require("../models/Contact");

router.post("/", async (req, res) => {
  try {
    const contact = new ContactMessage(req.body);
    await contact.save();
    res.status(201).json({ message: "Thanks for contacting us!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error saving message." });
  }
});

module.exports = router;
