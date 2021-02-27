import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

const defaultProps = {
  size: 24,
  color: "var(--black)",
};

const Delete = ({ size, color, ...props }) => (
  <svg
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.3249 9.4682C19.3249 9.4682 18.7819 16.2032 18.4669 19.0402C18.3169 20.3952 17.4799 21.1892 16.1089 21.2142C13.4999 21.2612 10.8879 21.2642 8.2799 21.2092C6.9609 21.1822 6.1379 20.3782 5.9909 19.0472C5.6739 16.1852 5.1339 9.4682 5.1339 9.4682"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.7082 6.23972H3.7502"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.4406 6.2397C16.6556 6.2397 15.9796 5.6847 15.8256 4.9157L15.5826 3.6997C15.4326 3.1387 14.9246 2.7507 14.3456 2.7507H10.1126C9.5336 2.7507 9.0256 3.1387 8.8756 3.6997L8.6326 4.9157C8.4786 5.6847 7.8026 6.2397 7.0176 6.2397"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Delete.propTypes = propTypes;
Delete.defaultProps = defaultProps;

export default Delete;
