import axios from "axios";

export const API = axios.create({
  baseURL: "http://dgu-yadan.site/",

  headers: {
    "Content-Type": "application/json"
  },
  withCredentials: true
});
