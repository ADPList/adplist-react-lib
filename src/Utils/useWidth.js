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
  const handleWidth = (get) => {
    if (get) {
      if (typeof window !== "undefined") {
        return window.innerWidth;
      }
    }
    setWidth(window.innerWidth);
  };

  /**
   * effect
   */
  useEffect(() => {
    window.addEventListener("resize", () => handleWidth());
    return () => {
      window.removeEventListener("resize", handleWidth());
    };
  });

  return width || handleWidth(true);
};

export default useWidth;
