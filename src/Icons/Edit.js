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
  size: 24,
  color: "var(--black)",
};

const Edit = ({ size, color, ...props }) => (
  <svg
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.6168 3.75204C16.8552 3.51361 17.1383 3.32448 17.4498 3.19545C17.7613 3.06641 18.0952 3 18.4324 3C18.7696 3 19.1035 3.06641 19.415 3.19545C19.7265 3.32448 20.0095 3.51361 20.248 3.75204C20.4864 3.99046 20.6755 4.27351 20.8046 4.58503C20.9336 4.89655 21 5.23043 21 5.56761C21 5.90479 20.9336 6.23868 20.8046 6.55019C20.6755 6.86171 20.4864 7.14476 20.248 7.38319L7.99283 19.6383L3 21L4.36168 16.0072L16.6168 3.75204Z"
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
