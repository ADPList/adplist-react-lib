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

const Chat = ({ size, color, ...props }) => (
  <svg
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 22 22"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.12593 12.2518C6.54565 12.2518 6.07422 11.7804 6.07422 11.2001C6.07422 10.6214 6.54565 10.15 7.12593 10.15C7.70623 10.15 8.17765 10.6214 8.17765 11.2001C8.17765 11.7804 7.70623 12.2518 7.12593 12.2518ZM11.2145 12.2518C10.6342 12.2518 10.1628 11.7804 10.1628 11.2001C10.1628 10.6214 10.6342 10.15 11.2145 10.15C11.7948 10.15 12.2662 10.6214 12.2662 11.2001C12.2662 11.7804 11.7948 12.2518 11.2145 12.2518ZM14.2515 11.2001C14.2515 11.7804 14.7229 12.2518 15.3032 12.2518C15.8834 12.2518 16.3549 11.7804 16.3549 11.2001C16.3549 10.6214 15.8834 10.15 15.3032 10.15C14.7229 10.15 14.2515 10.6214 14.2515 11.2001Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.018 2C5.789 2 2 6.27151 2 11.0135C2 12.5278 2.441 14.0862 3.215 15.5104C3.359 15.7456 3.377 16.0422 3.278 16.3225L2.675 18.3415C2.54 18.8282 2.954 19.1878 3.413 19.0437L5.231 18.5038C5.726 18.3415 6.113 18.5479 6.572 18.8282C7.886 19.6025 9.524 20 11 20C15.464 20 20 16.5478 20 10.9865C20 6.19038 16.13 2 11.018 2Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Chat.propTypes = propTypes;
Chat.defaultProps = defaultProps;

export default Chat;
