import moment from "moment";
import { useCookies as cookieHook } from "react-cookie";

const useCookie = () => {
  const [cookies, setcookie, removecookie] = cookieHook(["token"]);

  const setCookie = (key, value) => {
    return setcookie(key, value, {
      path: "/",
      domain: process.env.REACT_APP_PARENT_DOMAIN,
      maxAge: 60 * 60 * 24 * 31 * 3,
      expires: moment().add(3, "months").toDate(),
    });
  };

  const getCookie = (key) => {
    return cookies[key];
  };

  const deleteCookie = (key) => {
    return removecookie(key);
  };

  return { setCookie, getCookie, deleteCookie };
};

export default useCookie;
