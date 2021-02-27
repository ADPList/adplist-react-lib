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

const Upload = ({ size, color, ...props }) => (
  <svg
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 14V17.3333C19 17.7754 18.8361 18.1993 18.5444 18.5118C18.2527 18.8244 17.857 19 17.4444 19H6.55556C6.143 19 5.74733 18.8244 5.45561 18.5118C5.16389 18.1993 5 17.7754 5 17.3333V14"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 9L12 5L8 9"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 5V14"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Upload.propTypes = propTypes;
Upload.defaultProps = defaultProps;

export default Upload;
