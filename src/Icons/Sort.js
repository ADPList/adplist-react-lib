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

const Sort = ({ size, color, ...props }) => (
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
      d="M4 6.25C4.41421 6.25 4.75 6.58579 4.75 7V15.1893L6.46967 13.4697C6.76256 13.1768 7.23744 13.1768 7.53033 13.4697C7.82322 13.7626 7.82322 14.2374 7.53033 14.5303L4.53033 17.5303C4.23744 17.8232 3.76256 17.8232 3.46967 17.5303L0.46967 14.5303C0.176777 14.2374 0.176777 13.7626 0.46967 13.4697C0.762563 13.1768 1.23744 13.1768 1.53033 13.4697L3.25 15.1893V7C3.25 6.58579 3.58579 6.25 4 6.25ZM10.25 7C10.25 6.58579 10.5858 6.25 11 6.25H19C19.4142 6.25 19.75 6.58579 19.75 7C19.75 7.41421 19.4142 7.75 19 7.75H11C10.5858 7.75 10.25 7.41421 10.25 7ZM10.25 12C10.25 11.5858 10.5858 11.25 11 11.25H19C19.4142 11.25 19.75 11.5858 19.75 12C19.75 12.4142 19.4142 12.75 19 12.75H11C10.5858 12.75 10.25 12.4142 10.25 12ZM10.25 17C10.25 16.5858 10.5858 16.25 11 16.25H23C23.4142 16.25 23.75 16.5858 23.75 17C23.75 17.4142 23.4142 17.75 23 17.75H11C10.5858 17.75 10.25 17.4142 10.25 17Z"
      fill={color}
    />
  </svg>
);

Sort.propTypes = propTypes;
Sort.defaultProps = defaultProps;

export default Sort;
