import { useGlobal, useEffect } from "reactn";

import moment from "moment";

import useCookie from "../Utils/useCookie";
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
  const { getCookie, deleteCookie } = useCookie();

  /**
   * resetting refresh timer and local Token
   * @param {*} value
   */
  const setRefresh = (value) => {
    value = value ? value?.toISOString() : "";
    if (value) {
      window.localStorage.setItem("refresh", value);
    } else {
      window.localStorage.removeItem("refresh");
    }

    window.localStorage.removeItem("accessToken");
  };

  /**
   * get user payload
   */
  const handleUserPayload = () => {
    return Http.get(`/account/user/`)
      .then((response) => setAuth(true) | setUser(response))
      .catch(
        () =>
          deleteCookie("token") |
          setRefresh("") |
          setAuth(false) |
          setUser(null),
      );
  };

  const handleIntervalCompute = () => {
    /**
     * variables
     */
    const token = getCookie("token");
    const refresh = window.localStorage.getItem("refresh");
    let localToken = window.localStorage.getItem("accessToken");

    /**
     * maintain global token and local token
     * check if local token and global token are the same
     * if not, delete local token
     */
    if (!localToken && token) {
      window.localStorage.setItem("accessToken", token);
      localToken = token;
    }

    if (token && localToken && token === localToken) {
      if (refresh) {
        if (moment(refresh).isBefore(moment())) {
          return setRefresh(moment().add(30, "minutes")) | handleUserPayload();
        }
      } else {
        return handleUserPayload() | setRefresh(moment().add(30, "minutes"));
      }
    } else {
      if (user || refresh || localToken) {
        return setAuth(false) | setUser(null) | setRefresh("");
      }
    }
  };

  /**
   * effect
   */
  useEffect(() => {
    handleIntervalCompute();

    const interval = setInterval(() => {
      handleIntervalCompute();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return children;
};

export default Auth;
