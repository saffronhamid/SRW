import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import LoginUser from "../pages/LoginUser";
import LoginOwner from "../pages/LoginOwner";

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/login/user" element={<LoginUser />} />
    <Route path="/login/owner" element={<LoginOwner />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default App;
