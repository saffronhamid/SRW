// backend/index.js
require("./db");
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const admin = require("firebase-admin");
const path = require("path");
const Owner = require("./models/Owner"); // mongoose model

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "smartrent-d3395.appspot.com",
});

const bucket = admin.storage().bucket();
const app = express();
app.use(cors());
app.use(express.json());

// 🧠 Setup multer for file uploads
const upload = multer({ storage: multer.memoryStorage() });

// ✅ Test Route
app.get("/", (req, res) => {
  res.send("SmartRent backend is working!");
});

// ✅ Profile submission route
app.post("/api/owner/profile", upload.fields([
  { name: "photo", maxCount: 1 },
  { name: "nationalId", maxCount: 1 }
]), async (req, res) => {
  try {
    const { uid, email, name, phone, address, apartmentName, apartmentAddress, city, rent } = req.body;
    const files = req.files;

    if (!files || !files.photo || !files.nationalId) {
      return res.status(400).json({ error: "Both photo and national ID are required." });
    }

    // 🔼 Upload photo
    const photoFile = files.photo[0];
    const photoBlob = bucket.file(`owners/${uid}/photo_${Date.now()}${path.extname(photoFile.originalname)}`);
    await photoBlob.save(photoFile.buffer, { contentType: photoFile.mimetype });
    const [photoURL] = await photoBlob.getSignedUrl({ action: "read", expires: "03-01-2030" });

    // 🔼 Upload national ID
    const idFile = files.nationalId[0];
    const idBlob = bucket.file(`owners/${uid}/id_${Date.now()}${path.extname(idFile.originalname)}`);
    await idBlob.save(idFile.buffer, { contentType: idFile.mimetype });
    const [idURL] = await idBlob.getSignedUrl({ action: "read", expires: "03-01-2030" });

    // 📝 Save to MongoDB
    const newOwner = new Owner({
      uid,
      email,
      name,
      phone,
      address,
      apartmentName,
      apartmentAddress,
      city,
      rent,
      photoURL,
      nationalIdURL: idURL,
      status: "pending",
      createdAt: new Date(),
    });

    await newOwner.save();
    res.status(200).json({ message: "Owner profile saved successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save owner profile." });
  }
});

app.listen(8000, () => {
  console.log("Server running at http://localhost:8000");
});
