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

const TickSquare = ({ color, size, ...props }) => (
  <svg
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.3344 2.75018H7.66543C4.64443 2.75018 2.75043 4.88918 2.75043 7.91618V16.0842C2.75043 19.1112 4.63543 21.2502 7.66543 21.2502H16.3334C19.3644 21.2502 21.2504 19.1112 21.2504 16.0842V7.91618C21.2504 4.88918 19.3644 2.75018 16.3344 2.75018Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.43994 12.0002L10.8139 14.3732L15.5599 9.62726"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

TickSquare.propTypes = propTypes;
TickSquare.defaultProps = defaultProps;

export default TickSquare;
