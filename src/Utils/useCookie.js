const useCookie = () => {
  const setCookie = (key, value) => {
    document.cookie = `${key}=${value};domain=${process.env.REACT_APP_PARENT_URL}`;
  };

  const getCookie = (key) => {
    return document.cookie
      .split("; ")
      .find((row) => row.startsWith(key))
      .split("=")[1];
  };

  return { setCookie, getCookie };
};

export default useCookie;
