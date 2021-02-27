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
      d="M10.1172 17.9866H2.88306"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.1179 17.9866C21.1179 19.5772 19.8285 20.8666 18.2379 20.8666C16.6473 20.8666 15.3579 19.5772 15.3579 17.9866C15.3579 16.3948 16.6473 15.1066 18.2379 15.1066C19.8285 15.1066 21.1179 16.3948 21.1179 17.9866Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.8827 6.26212H21.118"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.8826 6.26211C2.8826 7.85388 4.17201 9.14211 5.7626 9.14211C7.35319 9.14211 8.6426 7.85388 8.6426 6.26211C8.6426 4.67152 7.35319 3.38211 5.7626 3.38211C4.17201 3.38211 2.8826 4.67152 2.8826 6.26211Z"
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
