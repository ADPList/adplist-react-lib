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
  size: 15,
  color: "var(--grey-2)",
};

const MapPointer = ({ size, color, props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.5 6.25C2.5 3.48858 4.73858 1.25 7.5 1.25C10.2614 1.25 12.5 3.48858 12.5 6.25C12.5 8.59778 11.3602 9.51626 10.2976 10.3725C9.60079 10.9341 8.93715 11.4689 8.65 12.3625L8.33125 13.325C8.24188 13.5909 7.98635 13.7646 7.70625 13.75H7.35625C7.07615 13.7646 6.82062 13.5909 6.73125 13.325L6.4125 12.3625C6.11385 11.4715 5.44092 10.9372 4.73589 10.3775C3.65562 9.5198 2.5 8.6023 2.5 6.25ZM5.625 6.25C5.625 7.28553 6.46447 8.125 7.5 8.125C7.99728 8.125 8.47419 7.92746 8.82583 7.57583C9.17746 7.22419 9.375 6.74728 9.375 6.25C9.375 5.21447 8.53553 4.375 7.5 4.375C6.46447 4.375 5.625 5.21447 5.625 6.25Z"
      fill={color}
    />
  </svg>
);

MapPointer.propTypes = propTypes;
MapPointer.defaultProps = defaultProps;

export default MapPointer;
