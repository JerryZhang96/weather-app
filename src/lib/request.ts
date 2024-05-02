import axios from "axios";

const request = axios.create({
  baseURL: import.meta.env.VITE_OPEN_WEATHER_BASE_URL,
  timeout: 10000,
});

export default request;
