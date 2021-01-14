import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

const defaultProps = {
  size: 19,
  color: "var(--teal)",
};

const Delete = ({ size, color, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.375 4.75H3.95833H16.625"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.33325 4.74967V3.16634C6.33325 2.74642 6.50007 2.34369 6.797 2.04676C7.09393 1.74982 7.49666 1.58301 7.91659 1.58301H11.0833C11.5032 1.58301 11.9059 1.74982 12.2028 2.04676C12.4998 2.34369 12.6666 2.74642 12.6666 3.16634V4.74967M15.0416 4.74967V15.833C15.0416 16.2529 14.8748 16.6557 14.5778 16.9526C14.2809 17.2495 13.8782 17.4163 13.4583 17.4163H5.54159C5.12166 17.4163 4.71893 17.2495 4.422 16.9526C4.12507 16.6557 3.95825 16.2529 3.95825 15.833V4.74967H15.0416Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.91675 8.70801V13.458"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.0833 8.70801V13.458"
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
