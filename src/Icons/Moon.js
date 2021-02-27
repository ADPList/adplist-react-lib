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

const Moon = ({ color, size, ...props }) => (
  <svg
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={size} height={size} fill="white" />
    <path
      d="M19.8057 12.6148C19.6673 14.1127 19.1051 15.5402 18.185 16.7302C17.2649 17.9202 16.0249 18.8236 14.6101 19.3347C13.1953 19.8457 11.6643 19.9432 10.1961 19.6159C8.72788 19.2885 7.38328 18.5497 6.31961 17.4861C5.25594 16.4224 4.5172 15.0778 4.18983 13.6096C3.86245 12.1414 3.95999 10.6103 4.47102 9.19555C4.98205 7.78076 5.88544 6.54077 7.07549 5.62067C8.26553 4.70057 9.693 4.13842 11.1909 4C10.3139 5.18642 9.89192 6.6482 10.0016 8.11946C10.1114 9.59072 10.7455 10.9737 11.7887 12.017C12.8319 13.0602 14.215 13.6943 15.6862 13.804C17.1575 13.9138 18.6193 13.4918 19.8057 12.6148Z"
      fill={color}
    />
  </svg>
);

Moon.propTypes = propTypes;
Moon.defaultProps = defaultProps;

export default Moon;
