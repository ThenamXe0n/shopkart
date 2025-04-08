import axios from "axios";

export const axiosInstance = axios.create({
  // Your API base URL goes here
  baseURL: "http://localhost:8080",
});
