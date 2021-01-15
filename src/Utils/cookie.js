import Cookie from "js-cookie";

const cookie = () => {
  const setCookie = (key, value) => {
    return Cookie.set(key, value, {
      path: "/",
      expires: 60,
      domain: process.env.REACT_APP_PARENT_DOMAIN,
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
