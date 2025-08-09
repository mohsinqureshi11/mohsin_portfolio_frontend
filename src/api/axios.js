// src/api/axios.js
import axios from "axios";

const API = axios.create({
  baseURL: "https://mohsin-portfolio-backend.vercel.app/api", // ✅ Backend base URL
  headers: {
    "Content-Type": "application/json"
  }
});

export default API;
