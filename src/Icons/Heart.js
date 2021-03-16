import React from "react";
import PropTypes from "prop-types";

/**
 * props definition
 */
const propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

const defaultProps = {
  size: 24,
  color: "var(--black)",
};

const Heart = ({ color, size, ...props }) => (
  <svg
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 20C12.1903 20 12.4622 19.878 12.6616 19.7647C17.7644 16.6275 21 12.976 21 9.26362C21 6.17865 18.7976 4 15.9517 4C14.247 4 12.9217 4.87558 12.0898 6.22794C12.0492 6.29399 11.9514 6.29366 11.9111 6.2274C11.0942 4.88307 9.75241 4 8.04834 4C5.20242 4 3 6.17865 3 9.26362C3 12.976 6.23565 16.6275 11.3474 19.7647C11.5378 19.878 11.8097 20 12 20Z"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
    />
  </svg>
);

Heart.propTypes = propTypes;
Heart.defaultProps = defaultProps;

export default Heart;
