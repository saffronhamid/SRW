// pages/OwnerProfileForm.tsx
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { auth, db, storage } from "../src/firebase";
import { useNavigate } from "react-router-dom";

const OwnerProfileForm: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!file) {
      setError("Please upload your document.");
      return;
    }

    setUploading(true);
    try {
      const user = auth.currentUser;
      if (!user) throw new Error("User not logged in");

      // Upload file to Firebase Storage
      const storageRef = ref(storage, `documents/${user.uid}/${file.name}`);
      await uploadBytes(storageRef, file);
      const fileURL = await getDownloadURL(storageRef);

      // Save profile data to Firestore
      await addDoc(collection(db, "owners"), {
        uid: user.uid,
        name,
        phone,
        address,
        documentURL: fileURL,
        email: user.email,
        createdAt: new Date(),
      });

      alert("Profile submitted successfully!");
      navigate("/owner/thank-you");

    } catch (err: any) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow-md p-6 rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Complete Your Owner Profile</h2>
      {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full border p-2 rounded"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <textarea
          placeholder="Address"
          className="w-full border p-2 rounded"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <input
          type="file"
          accept=".pdf,.jpg,.png"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          required
        />
        <button
          type="submit"
          className="bg-slate-900 text-white py-2 px-4 rounded hover:bg-slate-800 disabled:opacity-50"
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Submit Profile"}
        </button>
      </form>
    </div>
  );
};

export default OwnerProfileForm;
