import axios from "axios";

console.log(import.meta.env.BASE_URL);
const api = axios.create({
  baseURL: import.meta.env.BASE_URL,
});

export default api;
