const mongoose = require("mongoose");

mongoose.connect("YOUR_MONGODB_ATLAS_URI", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("✅ MongoDB connected"));

module.exports = db;
