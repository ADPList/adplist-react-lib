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
  size: 27,
  color: "var(--default)",
};

const Moon = ({ color, size, ...props }) => (
  <svg
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 27 27"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M26.1943 14.2771C25.9649 16.7595 25.0333 19.1252 23.5084 21.0974C21.9836 23.0696 19.9286 24.5668 17.5839 25.4137C15.2392 26.2606 12.7018 26.4223 10.2686 25.8797C7.83538 25.3372 5.60701 24.1129 3.84423 22.3501C2.08144 20.5873 0.857143 18.3589 0.314596 15.9257C-0.227951 13.4925 -0.0663083 10.9551 0.78061 8.61043C1.62753 6.26574 3.12469 4.21074 5.09692 2.68589C7.06914 1.16104 9.43485 0.229404 11.9172 0C10.4639 1.96622 9.76451 4.38878 9.94634 6.82706C10.1282 9.26534 11.1791 11.5574 12.908 13.2863C14.6369 15.0152 16.929 16.0661 19.3673 16.248C21.8055 16.4298 24.2281 15.7304 26.1943 14.2771Z"
      fill={color}
    />
  </svg>
);

Moon.propTypes = propTypes;
Moon.defaultProps = defaultProps;

export default Moon;
