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
  color: "var(--teal)",
};

const Star = ({ size, color, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.4833 17.8994C11.8011 17.7076 12.1989 17.7076 12.5167 17.8994L17.696 21.0254C18.4533 21.4825 19.3875 20.8035 19.1866 19.942L17.8121 14.0503C17.7278 13.6888 17.8506 13.3103 18.1312 13.0673L22.7086 9.10188C23.3772 8.52268 23.0198 7.42442 22.1384 7.34964L16.1134 6.83848C15.7438 6.80712 15.4219 6.57379 15.2772 6.23229L12.9207 0.672369C12.5761 -0.140659 11.4239 -0.140659 11.0793 0.672369L8.72282 6.23229C8.57808 6.57379 8.25621 6.80712 7.88663 6.83848L1.86163 7.34964C0.980205 7.42442 0.622796 8.52268 1.29139 9.10189L5.86879 13.0673C6.14936 13.3103 6.27221 13.6888 6.18787 14.0503L4.81341 19.942C4.61245 20.8035 5.54668 21.4825 6.304 21.0254L11.4833 17.8994Z"
      fill={color}
    />
  </svg>
);

Star.propTypes = propTypes;
Star.defaultProps = defaultProps;

export default Star;
