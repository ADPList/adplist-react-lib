import moment from "moment";
import Cookie from "js-cookie";

const cookie = () => {
  const setCookie = (key, value) => {
    return Cookie.set(key, value, {
      path: "/",
      maxAge: 60 * 60 * 24 * 31 * 3,
      domain: process.env.REACT_APP_PARENT_DOMAIN,
      expires: moment().add(3, "months").toDate(),
    });
  };

  const getCookie = (key) => Cookie.get(key);
  const deleteCookie = (key) =>
    Cookie.remove(key, {
      path: "/",
      domain: process.env.REACT_APP_PARENT_DOMAIN,
    });

  return { setCookie, getCookie, deleteCookie };
};

export default cookie;
