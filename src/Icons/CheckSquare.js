import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

const defaultProps = {
  size: 36,
  color: "var(--black)",
};

const CheckSquare = ({ size, color, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M29.9464 5.04205H14.0533C8.51478 5.04205 5.04245 8.96355 5.04245 14.5131V29.4877C5.04245 35.0372 8.49828 38.9587 14.0533 38.9587H29.9446C35.5014 38.9587 38.9591 35.0372 38.9591 29.4877V14.5131C38.9591 8.96355 35.5014 5.04205 29.9464 5.04205Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.4732 22.0004L19.8255 26.3509L28.5265 17.6499"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

CheckSquare.propTypes = propTypes;
CheckSquare.defaultProps = defaultProps;

export default CheckSquare;
