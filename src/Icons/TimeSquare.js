import React from "react";
import PropTypes from "prop-types";

/**
 * prop definition
 */
const propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

const defaultProps = {
  size: 24,
  color: "var(--black)",
};

const TimeSquare = ({ size, color, ...props }) => (
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
      d="M16.3347 2.75021H7.6657C4.6447 2.75021 2.7507 4.88921 2.7507 7.91621V16.0842C2.7507 19.1112 4.6347 21.2502 7.6657 21.2502H16.3337C19.3647 21.2502 21.2507 19.1112 21.2507 16.0842V7.91621C21.2507 4.88921 19.3647 2.75021 16.3347 2.75021Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.3913 14.0177L12.0003 11.9947V7.63373"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

TimeSquare.propTypes = propTypes;
TimeSquare.defaultProps = defaultProps;

export default TimeSquare;
