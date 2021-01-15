import React, { useCallback } from "react";
import { useGlobal, useEffect } from "reactn";
import { toast } from "react-toastify";

import Notify from "../Components/Notify";
import cookie from "../Utils/cookie";
import Http from "../Utils/Http";

const Auth = ({ children }) => {
  /**
   * states
   */
  const [user, setUser] = useGlobal("user");
  const [, setAuth] = useGlobal("isAuthenticated");

  /**
   * functions
   */
  const { deleteCookie, getCookie } = cookie();

  /**
   * get user payload
   */
  const handleUserPayload = useCallback(() => {
    if (!user) {
      return Http.get(`/account/user/`)
        .then((response) => setAuth(true) | setUser(response))
        .catch(() => deleteCookie("token") | setAuth(false) | setUser(null));
    }
  }, [deleteCookie, setAuth, setUser, user]);

  const handleIntervalCompute = useCallback(() => {
    /**
     * variables
     */
    const token = getCookie("token");
    let localToken = window?.localStorage?.getItem("accessToken");

    /**
     * maintain global token and local token
     * check if local token and global token are the same
     * if not, delete local token
     */
    if (token && token !== localToken) {
      window.localStorage.setItem("accessToken", token);
      localToken = token;
    }

    if (token && localToken && token === localToken) {
      if (!user) {
        handleUserPayload();
      }
    } else {
      if (user || localToken) {
        if (token) {
          toast(
            <Notify body="Re-authenticating. Please wait" type="success" />,
          );
        }
        return setAuth(false) | setUser(null);
      }
    }
  }, [getCookie, setAuth, setUser, user, handleUserPayload]);

  /**
   * effect
   */
  useEffect(() => {
    handleIntervalCompute();

    const interval = setInterval(() => {
      handleIntervalCompute();
    }, 3000);

    return () => clearInterval(interval);
  }, [handleIntervalCompute]);

  useEffect(() => {
    handleUserPayload();
  }, [handleUserPayload]);

  return children;
};

export default Auth;
