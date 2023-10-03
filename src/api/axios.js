import axios from "axios";

export const API = axios.create({
  baseURL: "http://3.37.223.160",
  headers: {
    "Content-Type": "application/json"
  }
});
