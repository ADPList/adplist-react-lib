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
  size: 65,
  color: "var(--grey)",
};

const Close = ({ size, color, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 65 65"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="32.5" cy="32.5" r="32.5" fill="#EAEDF0" />
    <path
      d="M39 27L27 39"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M27 27L39 39"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Close.propTypes = propTypes;
Close.defaultProps = defaultProps;

export default Close;
