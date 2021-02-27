import React from "react";
import PropTypes from "prop-types";

/**
 * props default
 */
const propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

const defaultProps = {
  size: 24,
  color: "var(--black)",
};

const Copy = ({ color, size, ...props }) => (
  <svg
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.1538 9H10.8462C9.82655 9 9 9.82655 9 10.8462V19.1538C9 20.1734 9.82655 21 10.8462 21H19.1538C20.1734 21 21 20.1734 21 19.1538V10.8462C21 9.82655 20.1734 9 19.1538 9Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.76923 15H4.84615C4.35652 15 3.88695 14.8055 3.54073 14.4593C3.1945 14.1131 3 13.6435 3 13.1538V4.84615C3 4.35652 3.1945 3.88695 3.54073 3.54073C3.88695 3.1945 4.35652 3 4.84615 3H13.1538C13.6435 3 14.1131 3.1945 14.4593 3.54073C14.8055 3.88695 15 4.35652 15 4.84615V5.76923"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Copy.propTypes = propTypes;
Copy.defaultProps = defaultProps;

export default Copy;
