const mongoose = require("mongoose");

const ApartmentSchema = new mongoose.Schema({
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "Owner" },
  title: String,
  address: String,
  rent: Number,
  rooms: Number,
  size: String,
  images: [String],
  documents: [String],
  verificationStatus: { type: String, default: "pending" }, // or 'verified', 'rejected'
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Apartment", ApartmentSchema);
