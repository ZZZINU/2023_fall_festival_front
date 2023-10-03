import axios from "axios";

export const API = axios.create({
  baseURL: "http://175.45.200.133/",
  headers: {
    "Content-Type": "application/json"
  }
});
