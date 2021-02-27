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

const CloseCircle = ({ color, size, ...props }) => (
  <svg
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="12" fill="var(--grey-3)" />
    <path
      d="M11.9854 11.9853L9.15693 9.15686M11.9854 11.9853L14.8138 9.15686L11.9854 11.9853ZM11.9854 11.9853L9.15693 14.8137L11.9854 11.9853ZM11.9854 11.9853L14.8138 14.8137L11.9854 11.9853Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

CloseCircle.propTypes = propTypes;
CloseCircle.defaultProps = defaultProps;

export default CloseCircle;
