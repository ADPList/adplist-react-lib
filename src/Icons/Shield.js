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
  size: 20,
  color: "var(--black)",
};

const Shield = ({ size, color, ...props }) => (
  <svg
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.7209 4.26984C16.0851 4.39734 16.3284 4.74068 16.3284 5.12651V10.7707C16.3284 12.3482 15.7543 13.854 14.7426 15.0207C14.2326 15.6082 13.5893 16.0657 12.9051 16.4357L9.94009 18.0373L6.97008 16.4348C6.28425 16.0648 5.64008 15.6082 5.13008 15.0198C4.11675 13.8532 3.54175 12.3465 3.54175 10.7673V5.12651C3.54175 4.74068 3.78508 4.39734 4.14925 4.26984L9.63426 2.34234C9.82926 2.27401 10.0418 2.27401 10.2359 2.34234L15.7209 4.26984Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Shield.propTypes = propTypes;
Shield.defaultProps = defaultProps;

export default Shield;
