const Owner = require("../models/Owner");

exports.submitOwnerProfile = async (req, res) => {
  try {
    const { uid, fullName, phone, address, documentURL } = req.body;

    const owner = new Owner({ uid, fullName, phone, address, documentURL });
    await owner.save();

    res.status(201).json({ message: "Owner profile submitted", owner });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
