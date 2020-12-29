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
  color: "#293644",
};

const Sort = ({ size, color, ...props }) => (
  <svg
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 6C4.55228 6 5 6.44772 5 7V14.5858L6.29289 13.2929C6.68342 12.9024 7.31658 12.9024 7.70711 13.2929C8.09763 13.6834 8.09763 14.3166 7.70711 14.7071L4.70711 17.7071C4.31658 18.0976 3.68342 18.0976 3.29289 17.7071L0.292893 14.7071C-0.097631 14.3166 -0.097631 13.6834 0.292893 13.2929C0.683417 12.9024 1.31658 12.9024 1.70711 13.2929L3 14.5858V7C3 6.44772 3.44772 6 4 6ZM10 7C10 6.44772 10.4477 6 11 6H19C19.5523 6 20 6.44772 20 7C20 7.55228 19.5523 8 19 8H11C10.4477 8 10 7.55228 10 7ZM10 12C10 11.4477 10.4477 11 11 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H11C10.4477 13 10 12.5523 10 12ZM10 17C10 16.4477 10.4477 16 11 16H23C23.5523 16 24 16.4477 24 17C24 17.5523 23.5523 18 23 18H11C10.4477 18 10 17.5523 10 17Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

Sort.propTypes = propTypes;
Sort.defaultProps = defaultProps;

export default Sort;
