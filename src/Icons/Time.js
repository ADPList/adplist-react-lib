import React, { Fragment } from "react";
import PropTypes from "prop-types";

/**
 * props definition
 */
const propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  variant: PropTypes.oneOf(["square", "circle"]),
};

const defaultProps = {
  size: 24,
  color: "var(--black)",
  variant: "circle",
};

const Time = ({ color, size, variant, ...props }) => (
  <svg
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {variant === "circle" && (
      <Fragment>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.2498 12.0005C21.2498 17.1095 17.1088 21.2505 11.9998 21.2505C6.8908 21.2505 2.7498 17.1095 2.7498 12.0005C2.7498 6.89149 6.8908 2.75049 11.9998 2.75049C17.1088 2.75049 21.2498 6.89149 21.2498 12.0005Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.4314 14.9429L11.6614 12.6939V7.84689"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Fragment>
    )}

    {variant === "square" && (
      <Fragment>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.3347 2.75021H7.6657C4.6447 2.75021 2.7507 4.88921 2.7507 7.91621V16.0842C2.7507 19.1112 4.6347 21.2502 7.6657 21.2502H16.3337C19.3647 21.2502 21.2507 19.1112 21.2507 16.0842V7.91621C21.2507 4.88921 19.3647 2.75021 16.3347 2.75021Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.3913 14.0177L12.0003 11.9947V7.63373"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Fragment>
    )}
  </svg>
);

Time.propTypes = propTypes;
Time.defaultProps = defaultProps;

export default Time;
