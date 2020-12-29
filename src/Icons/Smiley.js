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
  size: 18,
  color: "var(--grey-2)",
};

const Smiley = ({ size, color, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 3.6C6.01766 3.6 3.6 6.01766 3.6 9C3.6 11.9823 6.01766 14.4 9 14.4C11.9823 14.4 14.4 11.9823 14.4 9C14.4 6.01766 11.9823 3.6 9 3.6ZM3 9C3 5.68629 5.68629 3 9 3C12.3137 3 15 5.68629 15 9C15 12.3137 12.3137 15 9 15C5.68629 15 3 12.3137 3 9Z"
      fill={color}
    />
    <path
      d="M7.19998 7.8001C7.53135 7.8001 7.79998 7.53147 7.79998 7.2001C7.79998 6.86873 7.53135 6.6001 7.19998 6.6001C6.8686 6.6001 6.59998 6.86873 6.59998 7.2001C6.59998 7.53147 6.8686 7.8001 7.19998 7.8001Z"
      fill={color}
    />
    <path
      d="M10.8 7.8001C11.1314 7.8001 11.4 7.53147 11.4 7.2001C11.4 6.86873 11.1314 6.6001 10.8 6.6001C10.4686 6.6001 10.2 6.86873 10.2 7.2001C10.2 7.53147 10.4686 7.8001 10.8 7.8001Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.24171 11.8472C7.32599 11.7045 7.50995 11.6572 7.6526 11.7415C8.23194 12.0838 8.63783 12.2234 9.01446 12.2214C9.39124 12.2195 9.78692 12.0757 10.3463 11.7421C10.4886 11.6572 10.6728 11.7038 10.7577 11.8461C10.8425 11.9884 10.796 12.1725 10.6537 12.2574C10.0625 12.6099 9.55483 12.8187 9.01755 12.8214C8.48012 12.8242 7.96127 12.6207 7.3474 12.258C7.20475 12.1738 7.15743 11.9898 7.24171 11.8472Z"
      fill={color}
    />
  </svg>
);

Smiley.propTypes = propTypes;
Smiley.defaultProps = defaultProps;

export default Smiley;
