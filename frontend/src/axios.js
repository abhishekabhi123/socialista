import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/",
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");
  //checking if accessToken exists
  if (accessToken) {
    config.headers = config.headers ?? {};
    config.headers["authorization"] = accessToken;
  }
  return config;
});

export default instance;
