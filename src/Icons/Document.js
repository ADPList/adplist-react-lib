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

const Document = ({ color, size, ...props }) => (
  <svg
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.7162 16.2234H8.4962"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.7162 12.0369H8.4962"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.2513 7.86008H8.4963"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.9086 2.74979C15.9086 2.74979 8.2316 2.75379 8.2196 2.75379C5.4596 2.77079 3.7506 4.58679 3.7506 7.35679V16.5528C3.7506 19.3368 5.4726 21.1598 8.2566 21.1598C8.2566 21.1598 15.9326 21.1568 15.9456 21.1568C18.7056 21.1398 20.4156 19.3228 20.4156 16.5528V7.35679C20.4156 4.57279 18.6926 2.74979 15.9086 2.74979Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Document.propTypes = propTypes;
Document.defaultProps = defaultProps;

export default Document;
