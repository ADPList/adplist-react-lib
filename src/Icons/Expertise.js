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
  color: "var(--grey-2)",
  size: 18,
};

const Expertise = ({ size, color, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.20006 5.99951L4.3932 6.2C3.60822 6.25607 3.00006 6.90923 3.00006 7.69619V8.47556C3.00006 9.24242 3.57903 9.88772 4.34262 9.95855C7.80216 10.2796 10.1986 10.28 13.6578 9.95873C14.4212 9.88781 15.0001 9.24257 15.0001 8.47583V7.69619C15.0001 6.90923 14.3919 6.25607 13.6069 6.2L10.8001 5.99951"
      stroke={color}
      strokeWidth="0.5"
      strokeLinecap="round"
    />
    <path
      d="M6.30005 5.99971V5.69971C6.30005 4.87129 6.97163 4.19971 7.80005 4.19971H10.2C11.0285 4.19971 11.7 4.87129 11.7 5.69971V5.99971"
      stroke={color}
      strokeWidth="0.5"
      strokeLinecap="round"
    />
    <path
      d="M4.35004 10.1992V12.2992C4.35004 13.1276 5.02162 13.7992 5.85004 13.7992H12.15C12.9785 13.7992 13.65 13.1276 13.65 12.2992V10.1992"
      stroke={color}
      strokeWidth="0.5"
      strokeLinecap="round"
    />
    <path
      d="M7.80005 8.69971H10.2"
      stroke={color}
      strokeWidth="0.5"
      strokeLinecap="round"
    />
  </svg>
);

Expertise.propTypes = propTypes;
Expertise.defaultProps = defaultProps;

export default Expertise;
