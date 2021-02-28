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

const ArchiveFull = ({ color, size, ...props }) => (
  <svg
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.84717 18.1661L4.09976 18.2284L4.84717 18.1661ZM19.1528 18.1661L18.4054 18.1038L19.1528 18.1661ZM14 12.75C14.4142 12.75 14.75 12.4142 14.75 12C14.75 11.5858 14.4142 11.25 14 11.25V12.75ZM10 11.25C9.58579 11.25 9.25 11.5858 9.25 12C9.25 12.4142 9.58579 12.75 10 12.75V11.25ZM3.25259 8.06228L4.09976 18.2284L5.59458 18.1038L4.74741 7.93772L3.25259 8.06228ZM6.84027 20.75H17.1597V19.25H6.84027V20.75ZM19.9002 18.2284L20.7474 8.06228L19.2526 7.93772L18.4054 18.1038L19.9002 18.2284ZM2.75 7V5H1.25V7H2.75ZM3 4.75H21V3.25H3V4.75ZM21.25 5V7H22.75V5H21.25ZM21 7.25H20V8.75H21V7.25ZM20 7.25H4V8.75H20V7.25ZM4 7.25H3V8.75H4V7.25ZM21.25 7C21.25 7.13807 21.1381 7.25 21 7.25V8.75C21.9665 8.75 22.75 7.9665 22.75 7H21.25ZM2.75 5C2.75 4.86193 2.86193 4.75 3 4.75V3.25C2.0335 3.25 1.25 4.0335 1.25 5H2.75ZM1.25 7C1.25 7.9665 2.0335 8.75 3 8.75V7.25C2.86193 7.25 2.75 7.13807 2.75 7H1.25ZM17.1597 20.75C18.59 20.75 19.7815 19.6537 19.9002 18.2284L18.4054 18.1038C18.3514 18.7517 17.8098 19.25 17.1597 19.25V20.75ZM21 4.75C21.1381 4.75 21.25 4.86193 21.25 5H22.75C22.75 4.0335 21.9665 3.25 21 3.25V4.75ZM4.09976 18.2284C4.21854 19.6537 5.41002 20.75 6.84027 20.75V19.25C6.19016 19.25 5.64857 18.7517 5.59458 18.1038L4.09976 18.2284ZM14 11.25H10V12.75H14V11.25Z"
      fill={color}
    />
  </svg>
);

ArchiveFull.propTypes = propTypes;
ArchiveFull.defaultProps = defaultProps;

export default ArchiveFull;