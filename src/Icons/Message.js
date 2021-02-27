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

const Message = ({ color, size, ...props }) => (
  <svg
    fill="none"
    width={color}
    height={color}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.2677 9.06113L13.0023 12.4954C12.1951 13.1283 11.0635 13.1283 10.2563 12.4954L5.95424 9.06113"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.88787 3.5H16.3158C17.6752 3.51525 18.969 4.08993 19.896 5.0902C20.823 6.09048 21.3022 7.42903 21.222 8.79412V15.322C21.3022 16.6871 20.823 18.0256 19.896 19.0259C18.969 20.0262 17.6752 20.6009 16.3158 20.6161H6.88787C3.96796 20.6161 2 18.2407 2 15.322V8.79412C2 5.87545 3.96796 3.5 6.88787 3.5Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Message.propTypes = propTypes;
Message.defaultProps = defaultProps;

export default Message;
