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

const ShieldDone = ({ color, size, ...props }) => (
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
      d="M18.865 5.1238C19.302 5.2768 19.594 5.6888 19.594 6.1518V12.9248C19.594 14.8178 18.906 16.6248 17.691 18.0248C17.08 18.7298 16.307 19.2788 15.486 19.7228L11.928 21.6448L8.364 19.7218C7.542 19.2778 6.768 18.7298 6.156 18.0238C4.94 16.6238 4.25 14.8158 4.25 12.9208V6.1518C4.25 5.6888 4.542 5.2768 4.979 5.1238L11.561 2.8108C11.795 2.7288 12.05 2.7288 12.283 2.8108L18.865 5.1238Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.32251 11.9177L11.2145 13.8107L15.1125 9.91269"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

ShieldDone.propTypes = propTypes;
ShieldDone.defaultProps = defaultProps;

export default ShieldDone;
