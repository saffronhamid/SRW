// pages/OwnerProfileForm.tsx
import React, { useState } from "react";
import axios from "axios";
import { auth } from "../src/firebase";
import { useNavigate } from "react-router-dom";

const OwnerProfileForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    apartmentName: "",
    apartmentAddress: "",
    city: "",
    rent: "",
  });
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [idFile, setIdFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!photoFile || !idFile) return setError("Please upload both photo and ID document.");

    try {
      setUploading(true);
      const user = auth.currentUser;
      if (!user) throw new Error("Not logged in");

      const data = new FormData();
      data.append("uid", user.uid);
      data.append("email", user.email || "");
      Object.entries(formData).forEach(([key, value]) => data.append(key, value));
      data.append("photo", photoFile);
      data.append("nationalId", idFile);

      await axios.post("http://localhost:8000/api/owner/profile", data);

      alert("Profile submitted!");
      navigate("/owner/thank-you");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-200 to-sky-300 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl animate-fade-in">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6 animate-slide-in">
          Complete Your Owner Profile
        </h2>

        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              className="input-field"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              className="input-field"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            name="address"
            placeholder="Your Residential Address"
            className="input-field"
            value={formData.address}
            onChange={handleChange}
            required
          />

          <hr className="my-6 border-blue-300" />
          <h3 className="text-xl font-semibold text-blue-700">Apartment Details</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="apartmentName"
              type="text"
              placeholder="Apartment Name"
              className="input-field"
              value={formData.apartmentName}
              onChange={handleChange}
              required
            />
            <input
              name="apartmentAddress"
              type="text"
              placeholder="Apartment Address"
              className="input-field"
              value={formData.apartmentAddress}
              onChange={handleChange}
              required
            />
            <input
              name="city"
              type="text"
              placeholder="City"
              className="input-field"
              value={formData.city}
              onChange={handleChange}
              required
            />
            <input
              name="rent"
              type="number"
              placeholder="Rent Price (€)"
              className="input-field"
              value={formData.rent}
              onChange={handleChange}
              required
            />
          </div>

          <hr className="my-6 border-blue-300" />
          <h3 className="text-xl font-semibold text-blue-700">Upload Documents</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={(e) => setPhotoFile(e.target.files?.[0] || null)}
              className="file-input"
              required
            />
            <input
              type="file"
              accept="image/png, image/jpeg"
              onChange={(e) => setIdFile(e.target.files?.[0] || null)}
              className="file-input"
              required
            />
          </div>

          <button
            type="submit"
            disabled={uploading}
            className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold mt-6"
          >
            {uploading ? "Uploading..." : "Submit Profile"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default OwnerProfileForm;
