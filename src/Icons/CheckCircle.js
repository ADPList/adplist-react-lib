import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

const defaultProps = {
  size: 155,
  color: "var(--black)",
};

const CheckCircle = ({ size, color, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 155 155"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M142.084 71.5583V77.4999C142.076 91.4268 137.566 104.978 129.227 116.133C120.889 127.287 109.167 135.447 95.812 139.396C82.4567 143.345 68.1826 142.871 55.1188 138.044C42.0549 133.218 30.9012 124.298 23.3211 112.614C15.741 100.931 12.1406 87.1103 13.057 73.2136C13.9733 59.3169 19.3573 46.0887 28.4059 35.5019C37.4545 24.915 49.6829 17.5368 63.2674 14.4675C76.8519 11.3983 91.0646 12.8025 103.786 18.4708"
      stroke={color}
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M142.083 25.8333L77.5 90.4813L58.125 71.1063"
      stroke={color}
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

CheckCircle.propTypes = propTypes;
CheckCircle.defaultProps = defaultProps;

export default CheckCircle;
