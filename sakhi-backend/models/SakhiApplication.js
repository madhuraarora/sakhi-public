// This section is currently unused.
// Added as a potential feature for future implementation based on demand.


const mongoose = require("mongoose");

const SakhiSchema = new mongoose.Schema({
  name: String,
  age: Number,
  address: String,
  contact: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("SakhiApplication", SakhiSchema);
