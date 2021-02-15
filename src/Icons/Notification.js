import React from "react";
import PropTypes from "prop-types";

/**
 * prop definition
 */
const propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

const defaultProps = {
  size: 22,
  color: "var(--black)",
};

const Notification = ({ size, color, ...props }) => (
  <svg
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 22 22"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.35084 12.6084V12.4113C3.37975 11.8282 3.56663 11.2632 3.89222 10.7746C4.43414 10.1877 4.80512 9.46847 4.96623 8.69238C4.96623 8.09255 4.96623 7.48415 5.01863 6.88433C5.28932 3.99658 8.14465 2 10.9651 2H11.0349C13.8553 2 16.7106 3.99658 16.99 6.88433C17.0424 7.48415 16.99 8.09255 17.0337 8.69238C17.197 9.47027 17.5676 10.1917 18.1078 10.7832C18.4357 11.2675 18.6229 11.8304 18.6491 12.4113V12.5998C18.6686 13.3832 18.3988 14.1471 17.8894 14.7507C17.2164 15.4563 16.303 15.8954 15.3223 15.9846C12.4464 16.2931 9.54479 16.2931 6.66895 15.9846C5.68932 15.8915 4.77728 15.4531 4.10178 14.7507C3.60029 14.1467 3.33411 13.3873 3.35084 12.6084Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.7998 18.9666C9.24915 19.5305 9.90903 19.8955 10.6333 19.9808C11.3578 20.066 12.0868 19.8645 12.6593 19.4207C12.8354 19.2895 12.9938 19.1368 13.1308 18.9666"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Notification.propTypes = propTypes;
Notification.defaultProps = defaultProps;

export default Notification;
