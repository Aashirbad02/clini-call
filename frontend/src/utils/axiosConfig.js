import axios from "axios";

const URL = process.env.REACT_APP_SERVER_URL;

const axiosApp = axios.create({
  URL,
  withCredentials: true,
});

export const axiosApp1 = axios.create({
  URL,
});

export default axiosApp;
