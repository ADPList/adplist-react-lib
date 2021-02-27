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
      d="M16.4242 5.56204C15.8072 3.78004 14.1142 2.50004 12.1222 2.50004C9.60919 2.49004 7.56319 4.51804 7.55219 7.03104V7.05104V9.19804"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.933 21.0004H8.292C6.198 21.0004 4.5 19.3024 4.5 17.2074V12.9194C4.5 10.8244 6.198 9.1264 8.292 9.1264H15.933C18.027 9.1264 19.725 10.8244 19.725 12.9194V17.2074C19.725 19.3024 18.027 21.0004 15.933 21.0004Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.1127 13.9526V16.1746"
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
