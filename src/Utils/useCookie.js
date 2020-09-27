const useCookie = () => {
  const setCookie = (key, value) => {
    document.cookie = `${key}=${value};domain=${process.env.REACT_APP_PARENT_URL}`;
  };

  const getCookie = (key) => {
    return (
      document.cookie
        ?.split("; ")
        ?.find((row) => row.startsWith(key))
        ?.split("=")[1] || null
    );
  };

  const deleteCookie = (key) => {
    if (getCookie(key)) {
      document.cookie = `${key}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
    }
  };

  return { setCookie, getCookie, deleteCookie };
};

export default useCookie;
