import { setGlobal } from "reactn";
import axios from "axios";

// import Notify from "../Components/Notify";
// import { toast } from "react-toastify";

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

const getCookie = (cname) => {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

Http.interceptors.request.use((config) => {
  const url = config?.url?.split("/") || [];
  const unAuthRoutes = ["authenticate", "sign-up-with-email", "forgotten"];

  if (unAuthRoutes.filter((x) => url.includes(x)).length === 0) {
    // get token from cookie
    let token = getCookie("token");
    console.log("Token from Cookie ", token);

    // if not available... get from local storage
    if (!token) token = window?.localStorage.getItem("accessToken");

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
