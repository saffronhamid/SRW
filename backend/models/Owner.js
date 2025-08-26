const mongoose = require("mongoose");

const OwnerSchema = new mongoose.Schema({
  uid: { type: String, required: true },
  email: String,
  name: String,
  phone: String,
  address: String,
  documentURL: String,
  verified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Owner", OwnerSchema);
