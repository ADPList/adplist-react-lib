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

const Image = ({ size, color, ...props }) => (
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
      d="M16.3034 2.75031H7.65443C4.63943 2.75031 2.75043 4.88431 2.75043 7.9043V16.0533C2.75043 19.0733 4.63143 21.2073 7.65443 21.2073H16.3024C19.3264 21.2073 21.2074 19.0733 21.2074 16.0533V7.9043C21.2074 4.88431 19.3264 2.75031 16.3034 2.75031Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.7033 8.78551C10.7033 9.80451 9.87633 10.6315 8.85733 10.6315C7.83933 10.6315 7.01233 9.80451 7.01233 8.78551C7.01233 7.76651 7.83933 6.93951 8.85733 6.93951C9.87633 6.93951 10.7033 7.76651 10.7033 8.78551Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.2068 14.9505C20.2128 14.0855 19.3478 13.0445 18.2078 12.3575C17.0658 11.6705 15.8388 12.0945 15.0468 13.1195C14.2818 14.1105 13.8038 15.4435 12.6488 16.0685C11.2258 16.8395 10.3898 15.5965 9.20276 15.0985C7.87776 14.5435 6.87176 15.5415 6.09776 16.5005C5.32276 17.4605 4.53776 18.4105 3.74976 19.3605"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;
