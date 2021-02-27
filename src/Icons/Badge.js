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

const Badge = ({ color, size, ...props }) => (
  <svg
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M23 12L20.5095 9.23491L20.8994 5.53315L17.2577 4.76216L15.4 1.5351L12 3.05461L8.60001 1.5351L6.74235 4.76216L3.1006 5.53315L3.4905 9.23491L1 12L3.49046 14.7651L3.10056 18.4669L6.74231 19.2379L8.59997 22.4649L12 20.9454L15.4 22.4649L17.2577 19.2379L20.8994 18.4669L20.5095 14.7651L23 12ZM16.6115 9.59147L11.0899 15.7776L7.25301 11.9407L8.16562 11.0281L11.0366 13.8991L15.6486 8.73204L16.6115 9.59147Z"
      fill={color}
    />
  </svg>
);

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;

export default Badge;
