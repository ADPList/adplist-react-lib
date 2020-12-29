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
  color: "var(--default)",
};

const Youtube = ({ size, color, ...props }) => (
  <svg
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.0676 14.2483L13.8084 12.0001L10.0676 9.75195V14.2483Z"
      fill={color}
    />
    <path
      d="M11.5 0C5.1497 0 0 5.3736 0 12C0 18.6264 5.1497 24 11.5 24C17.8503 24 23 18.6264 23 12C23 5.3736 17.8503 0 11.5 0ZM18.6857 12.0123C18.6857 12.0123 18.6857 14.4459 18.3899 15.6194C18.2241 16.2618 17.7387 16.7682 17.1231 16.9411C15.9985 17.25 11.5 17.25 11.5 17.25C11.5 17.25 7.01325 17.25 5.87687 16.9288C5.2613 16.756 4.77593 16.2493 4.61011 15.607C4.31408 14.4459 4.31408 12 4.31408 12C4.31408 12 4.31408 9.56653 4.61011 8.39301C4.77576 7.75067 5.27306 7.23175 5.87687 7.0589C7.0015 6.75 11.5 6.75 11.5 6.75C11.5 6.75 15.9985 6.75 17.1231 7.07117C17.7387 7.24402 18.2241 7.75067 18.3899 8.39301C18.6977 9.56653 18.6857 12.0123 18.6857 12.0123Z"
      fill={color}
    />
  </svg>
);

Youtube.propTypes = propTypes;
Youtube.defaultProps = defaultProps;

export default Youtube;
