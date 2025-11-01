// src/services/axios.js
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: "http://localhost:8081", // Axios agora SÓ precisa do endpoint
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

export default api;
