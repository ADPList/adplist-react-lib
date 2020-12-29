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
  color: "var(--teal)",
  size: 15,
};

const ArrowUpRight = ({ color, size, ...props }) => (
  <svg
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 15 15"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
      d="M4.375 10.625L10.625 4.375"
    />
    <path
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
      d="M4.375 4.375H10.625V10.625"
    />
  </svg>
);

ArrowUpRight.propTypes = propTypes;
ArrowUpRight.defaultProps = defaultProps;

export default ArrowUpRight;
