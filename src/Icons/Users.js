import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

const defaultProps = {
  size: 44,
  color: "var(--black)",
};

const Users = ({ size, color, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M32.2571 20.0418C35.1949 20.0418 37.5778 17.6604 37.5778 14.7228C37.5778 11.7852 35.1949 9.40384 32.2571 9.40384"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M34.7033 25.8219C35.5806 25.8824 36.4527 26.0069 37.3114 26.2001C38.5048 26.4337 39.9399 26.9228 40.4508 27.9933C40.7768 28.679 40.7768 29.4772 40.4508 30.1645C39.9415 31.235 38.5048 31.7225 37.3114 31.9678"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.5316 20.0418C8.59402 20.0418 6.211 17.6604 6.211 14.7228C6.211 11.7852 8.59402 9.40384 11.5316 9.40384"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.08558 25.8219C8.20833 25.8824 7.33612 26.0069 6.47735 26.2001C5.28416 26.4337 3.84895 26.9228 3.33974 27.9933C3.01204 28.679 3.01204 29.4772 3.33974 30.1645C3.84728 31.235 5.28416 31.7225 6.47735 31.9678"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.8858 26.9676C27.8384 26.9676 32.9237 27.8683 32.9237 31.473C32.9237 35.0762 27.872 36.0105 21.8858 36.0105C15.9316 36.0105 10.8479 35.1098 10.8479 31.5051C10.8479 27.9002 15.8997 26.9676 21.8858 26.9676Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.8858 21.8257C17.96 21.8257 14.8124 18.678 14.8124 14.7506C14.8124 10.8248 17.96 7.67709 21.8858 7.67709C25.8117 7.67709 28.9593 10.8248 28.9593 14.7506C28.9593 18.678 25.8117 21.8257 21.8858 21.8257Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Users.propTypes = propTypes;
Users.defaultProps = defaultProps;

export default Users;
