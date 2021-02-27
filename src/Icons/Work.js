import React from "react";
import PropTypes from "prop-types";

/**
 * props definition
 */
const propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

const defaultProps = {
  color: "var(--black)",
  size: 24,
};

const Work = ({ color, size, ...props }) => (
  <svg
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.80408 15.477C2.80408 15.477 2.94608 17.215 2.97908 17.763C3.02308 18.498 3.30708 19.319 3.78108 19.889C4.45008 20.697 5.23808 20.982 6.29008 20.984C7.52708 20.986 16.5221 20.986 17.7591 20.984C18.8111 20.982 19.5991 20.697 20.2681 19.889C20.7421 19.319 21.0261 18.498 21.0711 17.763C21.1031 17.215 21.2451 15.477 21.2451 15.477"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.49597 5.32949V4.95849C8.49597 3.73849 9.48397 2.75049 10.704 2.75049H13.286C14.505 2.75049 15.494 3.73849 15.494 4.95849L15.495 5.32949"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.995 16.6782V15.3842"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.74988 8.38912V11.8561C4.66788 13.1211 6.96588 14.0071 9.48788 14.3581C9.78988 13.2571 10.7829 12.4501 11.9899 12.4501C13.1779 12.4501 14.1909 13.2571 14.4729 14.3681C17.0049 14.0171 19.3119 13.1311 21.2399 11.8561V8.38912C21.2399 6.69512 19.8769 5.33112 18.1829 5.33112H5.81688C4.12288 5.33112 2.74988 6.69512 2.74988 8.38912Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Work.propTypes = propTypes;
Work.defaultProps = defaultProps;

export default Work;
