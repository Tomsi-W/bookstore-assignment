import axios from "axios";


export const api = axios.create({
  baseURL: "/", // <-- fontos, ne http://localhost:5000 legyen!
  headers: { "Content-Type": "application/json" },
});

export const getPublishers = () => api.get("/api/publishers");
