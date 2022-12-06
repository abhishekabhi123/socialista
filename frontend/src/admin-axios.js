import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/",
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  const adminAccessToken = localStorage.getItem("adminAccessToken");
  //checking if adminAccessToken exists
  if (adminAccessToken) {
    config.headers = config.headers ?? {};
    config.headers["authorization"] = adminAccessToken;
  }
  return config;
});

export default instance;
