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

const Location = ({ size, color, ...props }) => (
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
      d="M4.23913 10.3913C4.25354 6.15071 7.70289 2.72471 11.9435 2.73912C16.1841 2.75353 19.6101 6.20288 19.5957 10.4435V10.5304C19.5435 13.2869 18.0043 15.8348 16.1174 17.8261C15.0382 18.9467 13.8331 19.9388 12.5261 20.7826C12.1766 21.0849 11.6582 21.0849 11.3087 20.7826C9.3602 19.5143 7.65007 17.9131 6.25652 16.0522C5.01448 14.4294 4.3093 12.4597 4.23913 10.4174V10.3913Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.9174 13C13.2765 13 14.3783 11.8982 14.3783 10.5391C14.3783 9.18 13.2765 8.07823 11.9174 8.07823C10.5583 8.07823 9.45653 9.18 9.45653 10.5391C9.45653 11.8982 10.5583 13 11.9174 13Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Location.propTypes = propTypes;
Location.defaultProps = defaultProps;

export default Location;
