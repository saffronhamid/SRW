require("./db"); // 🔌 MongoDB connection
const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "smartrent-d3395.appspot.com"
});

const db = admin.firestore();
const bucket = admin.storage().bucket();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Basic test route
app.get("/", (req, res) => {
  res.send("SmartRent backend is working!");
});

app.listen(8000, () => {
  console.log("Server running on http://localhost:8000");
});
