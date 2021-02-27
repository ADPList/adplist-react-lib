import React from "react";
import PropTypes from "prop-types";

/**
 * props definition
 */
const propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  variant: PropTypes.oneOf(["filled", "outline"]),
};

const defaultProps = {
  size: 24,
  color: "var(--black)",
  variant: "filled",
};

const Star = ({ size, color, variant, ...props }) => (
  <svg
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {variant === "filled" && (
      <path
        d="M12 2.00003L15.09 8.26003L22 9.27003L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27003L8.91 8.26003L12 2.00003Z"
        fill={color}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    )}

    {variant === "outline" && (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.7141 3.44083L15.0301 8.09983C15.1461 8.33483 15.3701 8.49883 15.6301 8.53683L20.8151 9.28583C21.0251 9.31383 21.2141 9.42383 21.3431 9.59183C21.5851 9.90683 21.5481 10.3528 21.2581 10.6238L17.5001 14.2578C17.3091 14.4378 17.2241 14.7018 17.2741 14.9588L18.1741 20.0868C18.2371 20.5118 17.9471 20.9098 17.5221 20.9788C17.3461 21.0058 17.1661 20.9778 17.0061 20.8988L12.3881 18.4778C12.1561 18.3518 11.8781 18.3518 11.6461 18.4778L6.99413 20.9118C6.60513 21.1098 6.12913 20.9628 5.91713 20.5818C5.83613 20.4278 5.80813 20.2528 5.83613 20.0818L6.73613 14.9538C6.78113 14.6978 6.69613 14.4348 6.51013 14.2538L2.73213 10.6208C2.42413 10.3148 2.42213 9.81683 2.72913 9.50883C2.73013 9.50783 2.73113 9.50583 2.73213 9.50483C2.85913 9.38983 3.01513 9.31283 3.18413 9.28283L8.37013 8.53383C8.62913 8.49283 8.85213 8.33083 8.97013 8.09583L11.2841 3.44083C11.3771 3.25183 11.5421 3.10683 11.7421 3.04083C11.9431 2.97383 12.1631 2.98983 12.3521 3.08483C12.5071 3.16183 12.6341 3.28683 12.7141 3.44083Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    )}
  </svg>
);

Star.propTypes = propTypes;
Star.defaultProps = defaultProps;

export default Star;
