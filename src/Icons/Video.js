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

const Video = ({ color, size, ...props }) => (
  <svg
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.8161 15.6204C15.8161 17.6134 14.4581 19.0214 12.2861 19.0214H6.06909C3.89909 19.0214 2.55009 17.6134 2.55009 15.6204V8.6604C2.55009 6.6684 3.89909 5.2504 6.08009 5.2504H12.2861C14.4581 5.2504 15.8161 6.6684 15.8161 8.6604V15.6204Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.8161 11.2766L19.9131 7.9226C20.5631 7.3876 21.5501 7.8526 21.5501 8.6996V15.5716C21.5501 16.4196 20.5631 16.8826 19.9131 16.3486L15.8161 12.9946"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Video.propTypes = propTypes;
Video.defaultProps = defaultProps;

export default Video;
