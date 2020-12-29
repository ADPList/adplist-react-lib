import React from "react";
import PropTypes from "prop-types";

/**
 * props definition
 */
const propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

const defaultProps = {
  color: "var(--default)",
  size: 16,
};

const Edit = ({ size, color, ...props }) => (
  <svg
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11 2.33414C11.2652 2.06892 11.6249 1.91992 12 1.91992C12.1857 1.91992 12.3696 1.9565 12.5412 2.02757C12.7128 2.09864 12.8687 2.20281 13 2.33414C13.1313 2.46546 13.2355 2.62136 13.3066 2.79294C13.3776 2.96452 13.4142 3.14842 13.4142 3.33414C13.4142 3.51985 13.3776 3.70375 13.3066 3.87533C13.2355 4.04691 13.1313 4.20281 13 4.33414L4.66667 12.6675L2 13.3341L2.66667 10.6675L11 2.33414Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Edit.propTypes = propTypes;
Edit.defaultProps = defaultProps;

export default Edit;
