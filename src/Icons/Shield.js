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
  size: 20,
  color: "var(--black)",
};

const Shield = ({ size, color, ...props }) => (
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
      d="M12.8253 22.3182C11.7507 22.3182 10.8777 21.4452 10.8777 20.3705C10.8777 19.299 11.7507 18.426 12.8253 18.426C13.8999 18.426 14.7729 19.299 14.7729 20.3705C14.7729 21.4452 13.8999 22.3182 12.8253 22.3182ZM20.3967 22.3182C19.3221 22.3182 18.4491 21.4452 18.4491 20.3705C18.4491 19.299 19.3221 18.426 20.3967 18.426C21.4714 18.426 22.3444 19.299 22.3444 20.3705C22.3444 21.4452 21.4714 22.3182 20.3967 22.3182ZM26.0207 20.3705C26.0207 21.4452 26.8937 22.3182 27.9684 22.3182C29.0429 22.3182 29.9159 21.4452 29.9159 20.3705C29.9159 19.299 29.0429 18.426 27.9684 18.426C26.8937 18.426 26.0207 19.299 26.0207 20.3705Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.0334 3.33334C10.35 3.33334 3.33337 11.2435 3.33337 20.025C3.33337 22.8292 4.15004 25.7152 5.58337 28.3525C5.85004 28.7882 5.88337 29.3373 5.70004 29.8565L4.58337 33.5953C4.33337 34.4967 5.10004 35.1627 5.95004 34.8957L9.31671 33.8958C10.2334 33.5953 10.95 33.9777 11.8 34.4967C14.2334 35.9305 17.2667 36.6667 20 36.6667C28.2667 36.6667 36.6667 30.2737 36.6667 19.975C36.6667 11.0933 29.5 3.33334 20.0334 3.33334Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Shield.propTypes = propTypes;
Shield.defaultProps = defaultProps;

export default Shield;
