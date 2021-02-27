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

const Swap = ({ color, size, ...props }) => (
  <svg
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.8396 20.1642V6.54645"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.9172 16.0681L16.8394 20.1648L12.7617 16.0681"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.91109 3.83289V17.4507"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.83344 7.929L6.91121 3.83234L10.989 7.929"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Swap.propTypes = propTypes;
Swap.defaultProps = defaultProps;

export default Swap;
