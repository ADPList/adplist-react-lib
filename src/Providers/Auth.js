import { useGlobal, useEffect } from "reactn";
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

  /**
   * effect
   */
  useEffect(() => {
    const token = getCookie("token");

    if (token) {
      Http.get(`/account/user/`)
        .then((response) => setAuth(true) | setUser(response))
        .catch(() => deleteCookie("token") | setAuth(false) | setUser(null));
    }
  }, []);

  return children;
};

export default Auth;
