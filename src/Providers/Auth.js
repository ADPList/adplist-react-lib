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
  const [refresh, setRefresh] = useGlobal("refresh");

  /**
   * functions
   */
  const { getCookie, deleteCookie } = useCookie();

  const handleUserPayload = () => {
    return Http.get(`/account/user/`)
      .then((response) => setAuth(true) | setUser(response))
      .catch(
        () =>
          deleteCookie("token") |
          setRefresh(null) |
          setAuth(false) |
          setUser(null),
      );
  };

  const handleIntervalCompute = () => {
    const token = getCookie("token");
    if (token) {
      if (refresh) {
        if (moment(refresh).isBefore(moment())) {
          console.log("By Passed: ", refresh);
          return setRefresh(moment().add(30, "minutes")) | handleUserPayload();
        }
      } else {
        console.log("No Refresh: ", refresh);
        return handleUserPayload() | setRefresh(moment().add(30, "minutes"));
      }
    } else {
      return setAuth(false) | setUser(null) | setRefresh(null);
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
