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

const Unlock = ({ color, size, ...props }) => (
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
      d="M14.7365 2.7619H8.08449C6.02449 2.7619 4.25049 4.4309 4.25049 6.4909V17.3399C4.25049 19.5159 5.90849 21.1149 8.08449 21.1149H16.0725C18.1325 21.1149 19.8025 19.3999 19.8025 17.3399V8.0379L14.7365 2.7619Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.4738 2.75021V5.65921C14.4738 7.07921 15.6228 8.23121 17.0428 8.23421C18.3588 8.23721 19.7058 8.23821 19.7968 8.23221"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.2941 13.7472H9.39307"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Unlock.propTypes = propTypes;
Unlock.defaultProps = defaultProps;

export default Unlock;
