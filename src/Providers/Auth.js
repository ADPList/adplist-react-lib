import { useGlobal, useEffect } from "reactn";

import moment from "moment";

import useCookie from "../Utils/useCookie";
import Http from "../Utils/Http";

const Auth = ({ children }) => {
  /**
   * states
   */
  const [, setUser] = useGlobal("user");
  const [, setAuth] = useGlobal("isAuthenticated");

  /**
   * functions
   */
  const { getCookie, deleteCookie } = useCookie();

  const setRefresh = (value) => {
    value = value ? value?.toISOString() : "";
    if (value) {
      window.localStorage.setItem("refresh", value);
    } else {
      window.localStorage.removeItem("refresh");
    }
  };

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
    const token = getCookie("token");
    const refresh = window.localStorage.getItem("refresh");

    if (token) {
      if (refresh) {
        if (moment(refresh).isBefore(moment())) {
          return setRefresh(moment().add(30, "minutes")) | handleUserPayload();
        }
      } else {
        return handleUserPayload() | setRefresh(moment().add(30, "minutes"));
      }
    } else {
      return setAuth(false) | setUser(null) | setRefresh("");
    }
  };

  /**
   * effect
   */
  useEffect(() => {
    handleIntervalCompute();
    const interval = setInterval(() => {
      handleIntervalCompute();
    }, 1000 * 5);
    return () => clearInterval(interval);
  }, []);

  return children;
};

export default Auth;
