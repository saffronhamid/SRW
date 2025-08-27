const express = require("express");
const router = express.Router();
const OwnerProfile = require("../models/OwnerProfile");

// POST /api/owner/profile
router.post("/profile", async (req, res) => {
  try {
    const { uid, fullName, email, phone, address, idDocumentUrl } = req.body;

    // Basic validation
    if (!uid || !fullName || !email || !idDocumentUrl) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Check if profile already exists
    const existing = await OwnerProfile.findOne({ uid });
    if (existing) {
      return res.status(400).json({ error: "Profile already exists" });
    }

    const profile = new OwnerProfile({
      uid,
      fullName,
      email,
      phone,
      address,
      idDocumentUrl,
    });

    await profile.save();
    return res.status(201).json({ message: "Owner profile saved", profile });
  } catch (err) {
    console.error("Error saving profile:", err);
    return res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
