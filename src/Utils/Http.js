import { setGlobal } from "reactn";
import axios from "axios";
import cookie from "./cookie";

// variables
const rootState = {
  isAuthenticated: false,
  user: null,
};

// functions
export const Http = axios.create({
  baseURL: process.env.REACT_APP_API_BASEURL,
  timeout: 45000,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

Http.interceptors.request.use((config) => {
  const { getCookie } = cookie();
  const url = config?.url?.split("/") || [];
  const unAuthRoutes = ["authenticate", "sign-up-with-email", "forgotten"];

  if (unAuthRoutes.filter((x) => url.includes(x)).length === 0) {
    const token = getCookie("token");

    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }
  }

  return config;
});

Http.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status) {
      if (error.response.status === 401) {
        const { deleteCookie } = cookie();

        deleteCookie("token");
        setGlobal(rootState);
      }

      // if (error.response.status === 500) {
      //   toast(<Notify body="A server error occured" type="error" />);
      // }
    }

    return Promise.reject(error);
  },
);

export default Http;
