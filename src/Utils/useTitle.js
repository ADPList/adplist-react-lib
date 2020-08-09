import { useEffect } from "react";

export default (title) => {
  useEffect(() => {
    document.title = title.trim() + " - " + process.env.REACT_APP_TITLE_SUFFIX;
  }, [title]);
};
