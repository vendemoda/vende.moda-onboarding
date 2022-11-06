import axios from "axios";
import { toast } from "react-toastify";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const Api = axios.create({
  baseURL: "https://apicatalogo.modacentersantacruz.com.br/v1",
  headers,
});

Api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("user_token");
  if (token && config && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

Api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response?.data?.message === "invalid signature") {
      toast("Sua sessão expirou, faça login novamente");
      localStorage.clear();
      window.location.reload();
    }
    if (error.response?.data?.message === "expired-token") {
      toast("Sua sessão expirou, faça login novamente");
      localStorage.clear();
      return window.location.replace("/");
    }
    return Promise.reject(error);
  }
);

export default Api;
