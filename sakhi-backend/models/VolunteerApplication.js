// This section is currently unused.
// Added as a potential feature for future implementation based on demand.


const mongoose = require("mongoose");

const VolunteerSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  education: String,
  areas: String,
  phone: String,
  email: String,
  availability: String,
  experience: String,

  username: String,
  password: String,
  approved: {
    type: Boolean,
    default: false
  },

  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("VolunteerApplication", VolunteerSchema);



