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
  color: "#fff",
  size: 16,
};

const Briefcase = ({ color, size, ...props }) => (
  <svg
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 16 15"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.6 3.80005H2.4C1.6268 3.80005 1 4.42685 1 5.20005V12.2C1 12.9732 1.6268 13.6 2.4 13.6H13.6C14.3732 13.6 15 12.9732 15 12.2V5.20005C15 4.42685 14.3732 3.80005 13.6 3.80005Z"
      stroke={color}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.8 13.6V2.4C10.8 2.0287 10.6525 1.6726 10.3899 1.41005C10.1273 1.1475 9.77125 1 9.39995 1H6.59995C6.22865 1 5.87255 1.1475 5.61 1.41005C5.34745 1.6726 5.19995 2.0287 5.19995 2.4V13.6"
      stroke={color}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Briefcase.propTypes = propTypes;
Briefcase.defaultProps = defaultProps;

export default Briefcase;
