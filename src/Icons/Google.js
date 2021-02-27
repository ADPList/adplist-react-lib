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

const Google = ({ color, size, ...props }) => (
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
      d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37259 0 0 5.37258 0 12C0 18.6274 5.37259 24 12 24ZM19 12.1624C19 16.1645 16.2625 19 12.1414 19C8.19553 19 5 15.8677 5 12C5 8.13227 8.19553 5 12.1414 5C14.0705 5 15.6778 5.68787 16.9261 6.83307L14.9875 8.6568C14.4609 8.16027 13.5354 7.57787 12.1424 7.57787C9.70667 7.57787 7.71945 9.5556 7.71945 12C7.71945 14.4444 9.70761 16.4212 12.1424 16.4212C14.9684 16.4212 16.0301 14.4257 16.1958 13.4037H12.1424V10.9976H18.8838C18.9514 11.3504 19 11.7041 19 12.1624Z"
      fill={color}
    />
  </svg>
);

Google.propTypes = propTypes;
Google.defaultProps = defaultProps;

export default Google;
