const mongoose = require("mongoose");

const apartmentSchema = new mongoose.Schema({
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "Owner" },
  title: String,
  description: String,
  location: String,
  price: Number,
  documentURL: String,
  isVerified: { type: Boolean, default: false }
});

module.exports = mongoose.model("Apartment", apartmentSchema);
