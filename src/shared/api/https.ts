import axios from "axios";
import toast from "react-hot-toast";
import { baseURL } from "../config/paths";

function httpClientBuilder() {
  const client = axios.create({ baseURL });

  client.interceptors.request.use((config) => {
    const token = localStorage.getItem("@token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  });

  client.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response && error.response.status === 401) {
        localStorage.removeItem("@token");
        toast.error("Acesso expirado");
        window.location.href = "/";

        return Promise.reject(error);
      }
      return Promise.reject(error);
    }
  );

  return client;
}

const http = httpClientBuilder();

export { http };
