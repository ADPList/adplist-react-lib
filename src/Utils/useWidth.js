import { useState, useEffect } from "react";
import { debounce } from "lodash";

const useWidth = () => {
  /**
   * state
   */
  const [width, setWidth] = useState();

  /**
   * function
   */
  const handleWidth = debounce(() => {
    if (typeof window !== "undefined") setWidth(window.innerWidth);
  }, 1000);

  /**
   * effect
   */
  useEffect(() => {
    if (typeof window !== "undefined")
      window.addEventListener("resize", () => handleWidth());
    return () => {
      if (typeof window !== "undefined")
        window.removeEventListener("resize", handleWidth());
    };
  });

  return width;
};

export default useWidth;
