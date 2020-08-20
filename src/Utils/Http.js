import React from "react";
import { toast } from "react-toastify";
import axios from "axios";

// import { Notify } from "../Components";

export const Http = axios.create({
  baseURL: process.env.REACT_APP_API_BASEURL,
  timeout: 45000,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const request = async (service) => {
  try {
    const response = await service();
    return {
      data: response.data,
    };
  } catch (error) {
    let error;
    if (error.response) {
      error = error.response;
    } else {
      error = "Connection error";
    }

    return { error };
  }
};

Http.interceptors.request.use((config) => {
  const url = config?.url?.split("/") || [];

  if (!["login", "forgotten"].includes(url[1]))
    config.headers["Authorization"] = `Bearer ${localStorage["access_token"]}`;

  return config;
});

Http.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status) {
      if (error.response.status === 401) {
        localStorage.clear();
      }

      if (error.response.status === 500) {
        toast(<Notify body="A server error occured" type="error" />);
      }
    }

    return Promise.reject(error);
  },
);

export default Http;
