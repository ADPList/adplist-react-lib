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

const TicketStar = ({ color, size, ...props }) => (
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
      d="M17.8573 20.4168C19.7323 20.4168 21.2503 18.8978 21.2503 17.0238V14.3238C20.0103 14.3238 19.0103 13.3238 19.0103 12.0848C19.0103 10.8448 20.0103 9.84579 21.2503 9.84579L21.2483 7.14279C21.2483 5.26879 19.7303 3.74979 17.8563 3.74979H6.14431C4.27031 3.74979 2.75131 5.26879 2.75131 7.14279L2.75031 9.93279C3.98931 9.93279 4.98931 10.8448 4.98931 12.0848C4.98931 13.3238 3.98931 14.3238 2.75031 14.3238V17.0238C2.75031 18.8978 4.26831 20.4168 6.14231 20.4168H17.8573Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9998 13.8543L13.7398 14.7693C13.9028 14.8543 14.0938 14.7163 14.0628 14.5353L13.7298 12.5963L15.1388 11.2253C15.2708 11.0963 15.1978 10.8733 15.0158 10.8463L13.0698 10.5633L12.1988 8.79929C12.1178 8.63429 11.8828 8.63429 11.8008 8.79929L10.9298 10.5633L8.98481 10.8463C8.80281 10.8733 8.72981 11.0963 8.86181 11.2253L10.2698 12.5963L9.93681 14.5353C9.90581 14.7163 10.0968 14.8543 10.2598 14.7693L11.9998 13.8543Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

TicketStar.propTypes = propTypes;
TicketStar.defaultProps = defaultProps;

export default TicketStar;
