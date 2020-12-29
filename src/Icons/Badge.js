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
  size: 18,
  color: "var(--teal)",
};

const Badge = ({ color, size, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0)">
      <path
        d="M18 8.99995L15.9623 6.73759L16.2814 3.70888L13.3017 3.07807L11.7818 0.437744L9.00002 1.68098L6.21819 0.437744L4.69829 3.07807L1.71867 3.70888L2.03768 6.73759L0 8.99995L2.03765 11.2623L1.71864 14.291L4.69825 14.9218L6.21815 17.5622L8.99998 16.3189L11.7818 17.5622L13.3017 14.9218L16.2813 14.291L15.9623 11.2623L18 8.99995ZM12.773 7.02933L8.25538 12.0907L5.1161 8.95141L5.86278 8.20473L8.21177 10.5537L11.9852 6.32615L12.773 7.02933Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="18" height="18" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;

export default Badge;
