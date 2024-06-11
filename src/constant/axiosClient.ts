import axios from "axios";
import { baseURL } from "./contant";

export const axiosClient = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json", 
  },
});
