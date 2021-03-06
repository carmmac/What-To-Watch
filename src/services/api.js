import axios from "axios";

const BASE_URL = `https://6.react.pages.academy/wtw`;
const REQUEST_TIMEOUT = 5000;

const createApi = () => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onError = (error) => {
    throw error;
  };

  api.interceptors.response.use(onSuccess, onError);

  return api;
};

export {createApi};