const isBrowser = () => typeof window !== "undefined";

const useCookie = () => {
  const setCookie = (key, value) => {
    if (isBrowser) {
      return (window.document.cookie = `${key}=${value}; domain=${process.env.REACT_APP_PARENT_DOMAIN}; path=/`);
    }
  };

  const getCookie = (key) => {
    if (isBrowser) {
      return (
        window.document.cookie
          ?.split("; ")
          ?.find((row) => row.startsWith(key))
          ?.split("=")[1] || null
      );
    }
  };

  const deleteCookie = (key) => {
    if (isBrowser) {
      if (getCookie(key)) {
        return (window.document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=${process.env.REACT_APP_PARENT_DOMAIN}; path=/`);
      }
    }
  };

  return { setCookie, getCookie, deleteCookie };
};

export default useCookie;
