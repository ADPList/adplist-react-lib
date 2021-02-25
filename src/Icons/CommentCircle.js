import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

const defaultProps = {
  size: 40,
  color: "var(--black)",
};

const CommentCircle = ({ size, color, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.0367 1.66666C9.38499 1.66666 1.66666 10.3679 1.66666 20.0275C1.66666 23.1121 2.56499 26.2867 4.14166 29.1877C4.43499 29.667 4.47166 30.2711 4.26999 30.8421L3.04166 34.9549C2.76666 35.9463 3.60999 36.6789 4.54499 36.3852L8.24832 35.2854C9.25666 34.9549 10.045 35.3754 10.98 35.9463C13.6567 37.5235 16.9933 38.3333 20 38.3333C29.0933 38.3333 38.3333 31.301 38.3333 19.9725C38.3333 10.2026 30.45 1.66666 20.0367 1.66666Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

CommentCircle.propTypes = propTypes;
CommentCircle.defaultProps = defaultProps;

export default CommentCircle;
