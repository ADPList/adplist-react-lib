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

const ArrowForward = ({ color, size, ...props }) => (
  <svg
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 9H9.5C7.01472 9 5 11.0147 5 13.5C5 15.9853 7.01472 18 9.5 18M19 9L14 4M19 9L14 14"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

ArrowForward.propTypes = propTypes;
ArrowForward.defaultProps = defaultProps;

export default ArrowForward;
