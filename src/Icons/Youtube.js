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

const Youtube = ({ size, color, ...props }) => (
  <svg
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0)">
      <path
        d="M10.9877 14.248L14.8912 11.9998L10.9877 9.75165V14.248Z"
        fill={color}
      />
      <path
        d="M12.4822 0C5.85577 0 0.482178 5.3736 0.482178 12C0.482178 18.6264 5.85577 24 12.4822 24C19.1086 24 24.4822 18.6264 24.4822 12C24.4822 5.3736 19.1086 0 12.4822 0ZM19.9803 12.0123C19.9803 12.0123 19.9803 14.4459 19.6716 15.6194C19.4986 16.2618 18.9921 16.7682 18.3498 16.9411C17.1763 17.25 12.4822 17.25 12.4822 17.25C12.4822 17.25 7.80035 17.25 6.61456 16.9288C5.97223 16.756 5.46576 16.2493 5.29272 15.607C4.98383 14.4459 4.98383 12 4.98383 12C4.98383 12 4.98383 9.56653 5.29272 8.39301C5.46558 7.75067 5.9845 7.23175 6.61456 7.0589C7.78809 6.75 12.4822 6.75 12.4822 6.75C12.4822 6.75 17.1763 6.75 18.3498 7.07117C18.9921 7.24402 19.4986 7.75067 19.6716 8.39301C19.9928 9.56653 19.9803 12.0123 19.9803 12.0123Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect
          width="24"
          height="24"
          fill="white"
          transform="translate(0.482178)"
        />
      </clipPath>
    </defs>
  </svg>
);

Youtube.propTypes = propTypes;
Youtube.defaultProps = defaultProps;

export default Youtube;
