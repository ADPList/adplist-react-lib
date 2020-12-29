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
  color: "var(--grey-2)",
};

const Portfolio = ({ color, size, ...props }) => (
  <svg
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.99998 3.6C8.00586 3.6 7.19998 4.40589 7.19998 5.4C7.19998 6.39411 8.00586 7.2 8.99998 7.2C9.99409 7.2 10.8 6.39411 10.8 5.4C10.8 4.40589 9.99409 3.6 8.99998 3.6ZM6.59998 5.4C6.59998 4.07452 7.67449 3 8.99998 3C10.3255 3 11.4 4.07452 11.4 5.4C11.4 6.72548 10.3255 7.8 8.99998 7.8C7.67449 7.8 6.59998 6.72548 6.59998 5.4Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.57248 11.6127C4.64397 10.4318 5.48526 8.7002 6.9875 8.7002H11.2677C12.7794 8.7002 13.6178 10.4509 12.6701 11.6286C12.6701 11.6286 12.6701 11.6286 12.6701 11.6286L10.5052 14.319C9.77948 15.221 8.40335 15.2132 7.68785 14.3032L7.90814 14.13L7.68784 14.3032L5.57249 11.6127L5.8001 11.4338L5.57248 11.6127ZM6.04415 11.2419C5.42515 10.4546 5.986 9.3002 6.9875 9.3002H11.2677C12.2755 9.3002 12.8344 10.4673 12.2026 11.2525L12.2026 11.2525L10.0377 13.9429C9.55394 14.5442 8.63651 14.539 8.15951 13.9323L6.04415 11.2419C6.04415 11.2419 6.04415 11.2419 6.04415 11.2419Z"
      fill={color}
    />
  </svg>
);

Portfolio.propTypes = propTypes;
Portfolio.defaultProps = defaultProps;

export default Portfolio;
