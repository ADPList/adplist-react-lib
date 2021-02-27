import React from "react";
import PropTypes from "prop-types";

/**
 * props definition
 */
const propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  variant: PropTypes.oneOf(["rounded", "default"]),
};

const defaultProps = {
  size: 24,
  variant: "rounded",
  color: "var(--default)",
};

const Twitter = ({ size, color, variant, ...props }) => (
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
        d="M12.741 0C6.11456 0 0.740967 5.3736 0.740967 12C0.740967 18.6264 6.11456 24 12.741 24C19.3674 24 24.741 18.6264 24.741 12C24.741 5.3736 19.3674 0 12.741 0ZM18.22 9.35632C18.2253 9.47443 18.2279 9.59308 18.2279 9.71228C18.2279 13.3519 15.4575 17.5488 10.3912 17.549H10.3914H10.3912C8.83569 17.549 7.38824 17.0931 6.16931 16.3118C6.38483 16.3372 6.60419 16.3499 6.82629 16.3499C8.11682 16.3499 9.30444 15.9097 10.2473 15.1708C9.0415 15.1485 8.0249 14.3522 7.67407 13.2578C7.84198 13.29 8.01465 13.3076 8.19171 13.3076C8.44312 13.3076 8.68665 13.2737 8.91809 13.2105C7.65778 12.9582 6.70837 11.8444 6.70837 10.5106C6.70837 10.4982 6.70837 10.487 6.70874 10.4755C7.0799 10.6818 7.50433 10.806 7.95624 10.8199C7.21667 10.3264 6.73053 9.48285 6.73053 8.52722C6.73053 8.02258 6.86694 7.5498 7.10352 7.14276C8.46179 8.80939 10.4917 9.90546 12.7809 10.0206C12.7336 9.81885 12.7093 9.60864 12.7093 9.39258C12.7093 7.87207 13.9429 6.63849 15.4639 6.63849C16.2562 6.63849 16.9718 6.97339 17.4744 7.50879C18.1019 7.38501 18.6912 7.15576 19.2234 6.84027C19.0175 7.48315 18.5809 8.02258 18.0122 8.36371C18.5694 8.29706 19.1004 8.14929 19.5939 7.92993C19.2253 8.48236 18.7578 8.96759 18.22 9.35632Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect
          width="24"
          height="24"
          fill="white"
          transform="translate(0.740967)"
        />
      </clipPath>
    </defs>
  </svg>
);

Twitter.propTypes = propTypes;
Twitter.defaultProps = defaultProps;

export default Twitter;
