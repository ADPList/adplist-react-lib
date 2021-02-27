import React, { Fragment } from "react";
import PropTypes from "prop-types";

/**
 * props definition
 */
const propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  variant: PropTypes.oneOf(["empty", "checked", "failed"]),
};

const defaultProps = {
  size: 20,
  color: "var(--black)",
  variant: "empty",
};

const Shield = ({ size, color, variant, ...props }) => (
  <svg
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {variant === "empty" && (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.8651 5.1238C19.3021 5.2768 19.5941 5.6888 19.5941 6.1518V12.9248C19.5941 14.8178 18.9051 16.6248 17.6911 18.0248C17.0791 18.7298 16.3071 19.2788 15.4861 19.7228L11.9281 21.6448L8.36409 19.7218C7.54109 19.2778 6.76809 18.7298 6.15609 18.0238C4.94009 16.6238 4.25009 14.8158 4.25009 12.9208V6.1518C4.25009 5.6888 4.54209 5.2768 4.97909 5.1238L11.5611 2.8108C11.7951 2.7288 12.0501 2.7288 12.2831 2.8108L18.8651 5.1238Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    )}

    {variant === "checked" && (
      <Fragment>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.865 5.1238C19.302 5.2768 19.594 5.6888 19.594 6.1518V12.9248C19.594 14.8178 18.906 16.6248 17.691 18.0248C17.08 18.7298 16.307 19.2788 15.486 19.7228L11.928 21.6448L8.364 19.7218C7.542 19.2778 6.768 18.7298 6.156 18.0238C4.94 16.6238 4.25 14.8158 4.25 12.9208V6.1518C4.25 5.6888 4.542 5.2768 4.979 5.1238L11.561 2.8108C11.795 2.7288 12.05 2.7288 12.283 2.8108L18.865 5.1238Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.32251 11.9177L11.2145 13.8107L15.1125 9.91269"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Fragment>
    )}

    {variant === "failed" && (
      <Fragment>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.8651 5.1238C19.3021 5.2768 19.5941 5.6888 19.5941 6.1518V12.9248C19.5941 14.8178 18.9051 16.6248 17.6911 18.0248C17.0791 18.7298 16.3071 19.2788 15.4861 19.7228L11.9281 21.6448L8.36409 19.7218C7.54109 19.2778 6.76809 18.7298 6.15609 18.0238C4.94009 16.6238 4.25009 14.8158 4.25009 12.9208V6.1518C4.25009 5.6888 4.54209 5.2768 4.97909 5.1238L11.5611 2.8108C11.7951 2.7288 12.0501 2.7288 12.2831 2.8108L18.8651 5.1238Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.8011 13.8464L10.0431 10.0884"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.0433 13.8464L13.8013 10.0884"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Fragment>
    )}
  </svg>
);

Shield.propTypes = propTypes;
Shield.defaultProps = defaultProps;

export default Shield;
