import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../components/LandingPage/LandingPage";
import Login from "../components/Auth/Login";
import NotFound from "./NotFound";

function Pages() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Pages;
