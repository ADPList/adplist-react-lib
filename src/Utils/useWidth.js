import { useState, useEffect } from "react";
import { debounce } from "lodash";

const useWidth = () => {
  /**
   * state
   */
  const [width, setWidth] = useState(window.innerWidth);

  /**
   * function
   */
  const handleWidth = debounce(() => {
    setWidth(window.innerWidth);
  }, 1000);

  /**
   * effect
   */
  useEffect(() => {
    window.addEventListener("resize", () => handleWidth());
    return () => window.removeEventListener("resize", handleWidth());
  });

  return width;
};

export default useWidth;
