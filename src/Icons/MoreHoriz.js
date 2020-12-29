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
  size: 16,
  color: "var(--grey-2)",
};

const MoreHoriz = ({ size, color, props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.99992 8.66732C8.36811 8.66732 8.66659 8.36884 8.66659 8.00065C8.66659 7.63246 8.36811 7.33398 7.99992 7.33398C7.63173 7.33398 7.33325 7.63246 7.33325 8.00065C7.33325 8.36884 7.63173 8.66732 7.99992 8.66732Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.6667 8.66732C13.0349 8.66732 13.3333 8.36884 13.3333 8.00065C13.3333 7.63246 13.0349 7.33398 12.6667 7.33398C12.2985 7.33398 12 7.63246 12 8.00065C12 8.36884 12.2985 8.66732 12.6667 8.66732Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.33341 8.66732C3.7016 8.66732 4.00008 8.36884 4.00008 8.00065C4.00008 7.63246 3.7016 7.33398 3.33341 7.33398C2.96522 7.33398 2.66675 7.63246 2.66675 8.00065C2.66675 8.36884 2.96522 8.66732 3.33341 8.66732Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

MoreHoriz.propTypes = propTypes;
MoreHoriz.defaultProps = defaultProps;

export default MoreHoriz;
