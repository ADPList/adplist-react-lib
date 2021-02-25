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
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M25.9464 1.04205H10.0533C4.51478 1.04205 1.04245 4.96355 1.04245 10.5131V25.4877C1.04245 31.0372 4.49828 34.9587 10.0533 34.9587H25.9446C31.5014 34.9587 34.9591 31.0372 34.9591 25.4877V10.5131C34.9591 4.96355 31.5014 1.04205 25.9464 1.04205Z"
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
