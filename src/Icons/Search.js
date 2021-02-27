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
  color: "var(--teal)",
};

const Search = ({ color, size, ...props }) => (
  <svg
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.7666 20.7552C16.7308 20.7552 20.7552 16.7309 20.7552 11.7666C20.7552 6.80236 16.7308 2.77805 11.7666 2.77805C6.80235 2.77805 2.77804 6.80236 2.77804 11.7666C2.77804 16.7309 6.80235 20.7552 11.7666 20.7552Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.0183 18.4851L21.5423 22"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Search.propTypes = propTypes;
Search.defaultProps = defaultProps;

export default Search;
