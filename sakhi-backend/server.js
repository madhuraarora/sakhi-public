const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

// MongoDB Connection 
mongoose.connect(process.env.MONGO_URI, {
  socketTimeoutMS: 30000,      
  connectTimeoutMS: 30000      
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("MongoDB connection error:", err));


setInterval(async () => {
  try {
    await mongoose.connection.db.admin().ping();
    console.log("MongoDB pinged to keep alive");
  } catch (err) {
    console.error("Ping failed:", err);
  }
}, 5 * 60 * 1000);

// Routes
const sakhiRoutes = require("./routes/sakhi");           // Not in use yet
const volunteerRoutes = require("./routes/volunteer");   // Not in use yet
const reportRoutes = require("./routes/report");         // Not in use yet
const contactRoutes = require("./routes/contact");

app.use("/sakhi", sakhiRoutes);
app.use("/volunteer", volunteerRoutes);
app.use("/report", reportRoutes);
app.use("/contact", contactRoutes);

// Check route
app.get('/api/ping', async (req, res) => {
  try {
    await mongoose.connection.db.admin().ping();
    res.send("pong");
  } catch (err) {
    console.error("MongoDB ping failed:", err);
    res.status(500).send("MongoDB not responding");
  }
});

// Home route
app.get("/", (req, res) => {
  res.send("Sakhi backend running.");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
