import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000/api/v1",
});

instance.defaults.headers.common["Authorization"] =
  "Bearer " + JSON.parse(localStorage.getItem("token"));

instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const axiosService = instance;

export default axiosService;
