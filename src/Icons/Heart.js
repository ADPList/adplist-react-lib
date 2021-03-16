import React from "react";
import PropTypes from "prop-types";

/**
 * props definition
 */
const propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  variant: PropTypes.oneOf(["filled", "outline"]),
};

const defaultProps = {
  size: 24,
  color: "var(--black)",
  variant: "outline",
};

const Heart = ({ color, size, variant, ...props }) => (
  <svg
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {variant === "filled" && (
      <path
        fill={color}
        d="M12 21C12.2115 21 12.5136 20.8627 12.7351 20.7353C18.4048 17.2059 22 13.098 22 8.92157C22 5.45098 19.5529 3 16.3907 3C14.4899 3 13.0136 3.99212 12.0898 5.52285C12.0495 5.58964 11.9511 5.58931 11.9111 5.52229C11.0043 4.00067 9.50955 3 7.60927 3C4.44713 3 2 5.45098 2 8.92157C2 13.098 5.59517 17.2059 11.2749 20.7353C11.4864 20.8627 11.7885 21 12 21Z"
      />
    )}

    {variant === "outline" && (
      <path
        d="M12 20C12.1903 20 12.4622 19.878 12.6616 19.7647C17.7644 16.6275 21 12.976 21 9.26362C21 6.17865 18.7976 4 15.9517 4C14.247 4 12.9217 4.87558 12.0898 6.22794C12.0492 6.29399 11.9514 6.29366 11.9111 6.2274C11.0942 4.88307 9.75241 4 8.04834 4C5.20242 4 3 6.17865 3 9.26362C3 12.976 6.23565 16.6275 11.3474 19.7647C11.5378 19.878 11.8097 20 12 20Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    )}
  </svg>
);

Heart.propTypes = propTypes;
Heart.defaultProps = defaultProps;

export default Heart;
