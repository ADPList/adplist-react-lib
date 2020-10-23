const useCookie = () => {
  const setCookie = (key, value) => {
    window.document.cookie = `${key}=${value}; domain=${process.env.REACT_APP_PARENT_URL}; path=/`;
  };

  const getCookie = (key) => {
    return (
      window.document.cookie
        ?.split("; ")
        ?.find((row) => row.startsWith(key))
        ?.split("=")[1] || null
    );
  };

  const deleteCookie = (key) => {
    if (getCookie(key)) {
      window.document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=${process.env.REACT_APP_PARENT_URL}; path=/`;
    }
  };

  return { setCookie, getCookie, deleteCookie };
};

export default useCookie;
