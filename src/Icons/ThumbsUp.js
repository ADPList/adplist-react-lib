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
  color: "var(--default)",
};

const ThumbsUp = ({ size, color, ...props }) => (
  <svg
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.25 16.5H3C2.60218 16.5 2.22064 16.342 1.93934 16.0607C1.65804 15.7794 1.5 15.3978 1.5 15V9.75C1.5 9.35218 1.65804 8.97064 1.93934 8.68934C2.22064 8.40804 2.60218 8.25 3 8.25H5.25M10.5 6.75V3.75C10.5 3.15326 10.2629 2.58097 9.84099 2.15901C9.41903 1.73705 8.84674 1.5 8.25 1.5L5.25 8.25V16.5H13.71C14.0717 16.5041 14.4228 16.3773 14.6984 16.143C14.9741 15.9087 15.1558 15.5827 15.21 15.225L16.245 8.475C16.2776 8.26002 16.2631 8.04051 16.2025 7.83169C16.1419 7.62287 16.0366 7.42972 15.8939 7.26564C15.7512 7.10155 15.5746 6.97045 15.3762 6.88141C15.1778 6.79238 14.9624 6.74754 14.745 6.75H10.5Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

ThumbsUp.propTypes = propTypes;
ThumbsUp.defaultProps = defaultProps;

export default ThumbsUp;
