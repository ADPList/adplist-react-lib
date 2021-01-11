import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

const defaultProps = {
  size: 24,
  color: "var(--teal)",
};

const ChatBubble = ({ size, color, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 192 192"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 96.12C16 53.977 49.68 16 96.16 16C141.6 16 176 53.2559 176 95.88C176 145.314 135.68 176 96 176C82.88 176 68.32 172.474 56.64 165.584C52.56 163.101 49.12 161.258 44.72 162.7L28.56 167.507C24.48 168.789 20.8 165.584 22 161.258L27.36 143.311C28.24 140.827 28.08 138.183 26.8 136.1C19.92 123.441 16 109.58 16 96.12ZM85.6 96.12C85.6 101.809 90.16 106.375 95.84 106.456C101.52 106.456 106.08 101.809 106.08 96.2C106.08 90.512 101.52 85.9448 95.84 85.9448C90.24 85.8648 85.6 90.512 85.6 96.12ZM122.48 96.2C122.48 101.809 127.04 106.456 132.72 106.456C138.4 106.456 142.96 101.809 142.96 96.2C142.96 90.512 138.4 85.9448 132.72 85.9448C127.04 85.9448 122.48 90.512 122.48 96.2ZM58.96 106.456C53.36 106.456 48.72 101.809 48.72 96.2C48.72 90.512 53.28 85.9448 58.96 85.9448C64.64 85.9448 69.2 90.512 69.2 96.2C69.2 101.809 64.64 106.375 58.96 106.456Z"
      fill={color}
    />
  </svg>
);

ChatBubble.propTypes = propTypes;
ChatBubble.defaultProps = defaultProps;

export default ChatBubble;
