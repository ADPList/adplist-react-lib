import React from "react";
import PropTypes from "prop-types";

/**
 * props definition
 */
const propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

const defaultProps = {
  size: 24,
  color: "var(--black)",
};

const Calendar = ({ size, color, ...props }) => (
  <svg
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.09264 9.40427H20.9166"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.4421 13.3097H16.4513"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.0046 13.3097H12.0139"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.55789 13.3097H7.56715"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.4421 17.1962H16.4513"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.0046 17.1962H12.0139"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.55789 17.1962H7.56715"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.0437 2V5.29078"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.9655 2V5.29078"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.2383 3.57919H7.77096C4.83427 3.57919 3 5.21513 3 8.22222V17.2719C3 20.3262 4.83427 22 7.77096 22H16.229C19.175 22 21 20.3546 21 17.3475V8.22222C21.0092 5.21513 19.1842 3.57919 16.2383 3.57919Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Calendar.propTypes = propTypes;
Calendar.defaultProps = defaultProps;

export default Calendar;
