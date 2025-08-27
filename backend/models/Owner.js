// backend/models/Owner.js
const mongoose = require('mongoose');

const OwnerSchema = new mongoose.Schema({
  uid: { type: String, required: true },
  email: { type: String, required: true },
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  documentURL: { type: String },
  apartmentDetails: {
    title: String,
    description: String,
    address: String,
    city: String,
    rent: Number,
    furnished: Boolean,
    rooms: Number,
    photos: [String],
  },
  verified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Owner', OwnerSchema);
