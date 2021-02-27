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

const MoreSquare = ({ color, size, ...props }) => (
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
      d="M16.3347 2.75021H7.66567C4.64467 2.75021 2.75067 4.88921 2.75067 7.91621V16.0842C2.75067 19.1112 4.63467 21.2502 7.66567 21.2502H16.3337C19.3647 21.2502 21.2507 19.1112 21.2507 16.0842V7.91621C21.2507 4.88921 19.3647 2.75021 16.3347 2.75021Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.52075 13.1974C6.85975 13.1974 6.32275 12.6604 6.32275 12.0004C6.32275 11.3404 6.85975 10.8024 7.52075 10.8024C8.18175 10.8024 8.71875 11.3404 8.71875 12.0004C8.71875 12.6604 8.18175 13.1974 7.52075 13.1974Z"
      fill={color}
    />
    <path
      d="M12.0002 13.1974C11.3392 13.1974 10.8022 12.6604 10.8022 12.0004C10.8022 11.3404 11.3392 10.8024 12.0002 10.8024C12.6612 10.8024 13.1982 11.3404 13.1982 12.0004C13.1982 12.6604 12.6612 13.1974 12.0002 13.1974Z"
      fill={color}
    />
    <path
      d="M16.4792 13.1974C15.8182 13.1974 15.2812 12.6604 15.2812 12.0004C15.2812 11.3404 15.8182 10.8024 16.4792 10.8024C17.1402 10.8024 17.6772 11.3404 17.6772 12.0004C17.6772 12.6604 17.1402 13.1974 16.4792 13.1974Z"
      fill={color}
    />
  </svg>
);

MoreSquare.propTypes = propTypes;
MoreSquare.defaultProps = defaultProps;

export default MoreSquare;
