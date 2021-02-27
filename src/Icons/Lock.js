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

const Lock = ({ color, size, ...props }) => (
  <svg
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.4234 9.4478V7.3008C16.4234 4.7878 14.3854 2.7498 11.8724 2.7498C9.35937 2.7388 7.31337 4.7668 7.30237 7.2808V7.3008V9.4478"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.6832 21.2496H8.04218C5.94818 21.2496 4.25018 19.5526 4.25018 17.4576V13.1686C4.25018 11.0736 5.94818 9.37659 8.04218 9.37659H15.6832C17.7772 9.37659 19.4752 11.0736 19.4752 13.1686V17.4576C19.4752 19.5526 17.7772 21.2496 15.6832 21.2496Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.8629 14.2027V16.4237"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Lock.propTypes = propTypes;
Lock.defaultProps = defaultProps;

export default Lock;
