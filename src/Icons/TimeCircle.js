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

const TimeCircle = ({ color, size, ...props }) => (
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
      d="M21.2498 12.0005C21.2498 17.1095 17.1088 21.2505 11.9998 21.2505C6.8908 21.2505 2.7498 17.1095 2.7498 12.0005C2.7498 6.89149 6.8908 2.75049 11.9998 2.75049C17.1088 2.75049 21.2498 6.89149 21.2498 12.0005Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.4314 14.9429L11.6614 12.6939V7.84689"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

TimeCircle.propTypes = propTypes;
TimeCircle.defaultProps = defaultProps;

export default TimeCircle;
