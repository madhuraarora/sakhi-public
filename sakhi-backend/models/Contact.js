// This section is currently under wraps to conserve funds during the early phases of the venture.
// Remains open for future integration.


const mongoose = require("mongoose");

const ContactMessageSchema = new mongoose.Schema({
  name: String,
  contact: String,
  reason: String,
  message: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("ContactMessage", ContactMessageSchema);
