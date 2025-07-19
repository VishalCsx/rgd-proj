import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api/v1/admin/", // your backend URL
  timeout: 10000,
});

export default api;
