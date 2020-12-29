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
  size: 16,
  color: "var(--default)",
};

const Download = ({ color, size, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0)">
      <path
        d="M5.33337 11.334L8.00004 14.0007L10.6667 11.334"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 8V14"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.92 12.06C14.4996 11.6524 14.9342 11.0707 15.1608 10.3994C15.3874 9.72805 15.3942 9.00197 15.1802 8.32651C14.9662 7.65104 14.5425 7.06135 13.9707 6.643C13.3988 6.22464 12.7085 5.9994 12 5.99996H11.16C10.9594 5.21854 10.5843 4.49279 10.0627 3.87734C9.54112 3.2619 8.88672 2.7728 8.14876 2.44686C7.4108 2.12092 6.60852 1.96664 5.80231 1.99563C4.99609 2.02463 4.20696 2.23614 3.49432 2.61424C2.78168 2.99234 2.16411 3.52719 1.68808 4.17851C1.21206 4.82983 0.88999 5.58065 0.746129 6.37446C0.602269 7.16826 0.640362 7.98435 0.857542 8.7613C1.07472 9.53825 1.46533 10.2558 1.99996 10.86"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

Download.propTypes = propTypes;
Download.defaultProps = defaultProps;

export default Download;
