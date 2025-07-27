// This section is currently unused.
// Added as a potential feature for future implementation based on demand.


const mongoose = require("mongoose");

const FieldReportSchema = new mongoose.Schema({
  volunteer: String,
  date: String,
  location: String,
  summary: String,
  peopleReached: Number,
  challenges: String,
  notes: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("FieldReport", FieldReportSchema);
