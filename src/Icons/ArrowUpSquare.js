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

const ArrowUpSquare = ({ color, size, ...props }) => (
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
      d="M16.3341 2.75H7.66512C4.64512 2.75 2.75012 4.889 2.75012 7.916V16.084C2.75012 19.111 4.63512 21.25 7.66512 21.25H16.3341C19.3641 21.25 21.2501 19.111 21.2501 16.084V7.916C21.2501 4.889 19.3641 2.75 16.3341 2.75Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.0001 7.914V16.086"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.25217 11.6777L12.0002 7.9137L15.7482 11.6777"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

ArrowUpSquare.propTypes = propTypes;
ArrowUpSquare.defaultProps = defaultProps;

export default ArrowUpSquare;
