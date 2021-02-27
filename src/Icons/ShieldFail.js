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

const ShieldFail = ({ color, size, ...props }) => (
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
      d="M18.8651 5.1238C19.3021 5.2768 19.5941 5.6888 19.5941 6.1518V12.9248C19.5941 14.8178 18.9051 16.6248 17.6911 18.0248C17.0791 18.7298 16.3071 19.2788 15.4861 19.7228L11.9281 21.6448L8.36409 19.7218C7.54109 19.2778 6.76809 18.7298 6.15609 18.0238C4.94009 16.6238 4.25009 14.8158 4.25009 12.9208V6.1518C4.25009 5.6888 4.54209 5.2768 4.97909 5.1238L11.5611 2.8108C11.7951 2.7288 12.0501 2.7288 12.2831 2.8108L18.8651 5.1238Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.8011 13.8464L10.0431 10.0884"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.0433 13.8464L13.8013 10.0884"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

ShieldFail.propTypes = propTypes;
ShieldFail.defaultProps = defaultProps;

export default ShieldFail;
